import { Request,Response } from "express";
import prisma from "../../prismaClient";
import { generateUniqueId, isValidEmail } from "../../utils";
import { FRONTEND_URL, INTASEND_IS_TEST, INTASEND_PUBLISHABLE_KEY, INTASEND_SECRET_KEY, REDIRECT_URL } from "../../constants";
const IntaSend   = require("intasend-node")

 const NODE_ENV = process.env.NODE_ENV ?? "development"
 export const getUrl = async (req: any, res: Response) => {
  const { userId, name } = req.body;
  const user = req.user;

  if (!userId || !name) {
    return res.status(400).json({ error: "userId and package name are required." });
  }

  try {
    // Find the package by name
    const packag = await prisma.package.findUnique({
      where: { name: name },
    });

    if (!packag) {
      return res.status(404).json({ error: "Package not found." });
    }

    // Extract necessary information
    const currency = "KES"; // Assume currency is KES for the transaction
    const mode = "mpesa"; // Payment method
    const amount = packag.price; // Package price from the database

    // User details
    const firstname = user?.firstname || "";
    const lastname = user?.lastname || "";
    const email = user?.email || " ";

    // IntaSend payment initialization
    const IntaSend = require("intasend-node");
    const intasend = new IntaSend(
      INTASEND_PUBLISHABLE_KEY,
      INTASEND_SECRET_KEY,
      INTASEND_IS_TEST
    );
    const collection = intasend.collection();
    const apiRef = generateUniqueId();
    const secretToken = generateUniqueId();

    // Logging for development mode
    console.log("NODE_ENV", NODE_ENV, NODE_ENV === "development");
    if (NODE_ENV === "development") {
      console.log("Secret Token", secretToken, mode, apiRef);
    }

    try {
      // Initiating the charge
      let resp = await collection.charge({
        firstname,
        lastname,
        email,
        host: FRONTEND_URL,
        method: "M-PESA",
        amount,
        currency,
        apiRef,
        redirect_url: `${REDIRECT_URL}/${secretToken}/${apiRef}/${mode}`,
      });

      // Store transaction details in the database
      const createRecord = await prisma.transaction.create({
        data: {
          userId: user.id,
          packageId: packag.id,
          amount: amount,
          apiRef,
          currency,
          status: 'PENDING',
          mode,
          secretToken,
          signature: resp.signature,
        checkoutId: resp.id,
        finalAmountInUSD:amount
        },
      });

      if (!createRecord) {
        console.error("Something went wrong while creating a transaction");
        return res.status(500).json({
          message: "Something went wrong in adding data to transaction table",
          status: "error",
        });
      }

      // Return payment details
      res.status(200).json({
        message: "Payment request successful",
        paymentDetails: resp.url,
      });
    } catch (error) {
      console.error(`Charge error:`, error);
      return res.status(500).json({ message: "Invalid Request", status: "error" });
    }
  } catch (error) {
    console.error("Error creating payment URL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Function to handle successful purchase
export const successFullTransacation = async (req: Request, res: Response) => {
  try {
    const { secret_token, mode, api_ref } = req.body;

    console.log("NODE_ENV", NODE_ENV, NODE_ENV === "development");
    if (NODE_ENV === "development")
      console.log("Secret Token", secret_token, mode, api_ref);

    if (!secret_token || !mode) {
      return res.status(401).json({
        message: "Unauthorized Payment",
      });
    }

    const transaction = await prisma.transaction.findFirst({
      where: {
        apiRef:api_ref,
        mode,
      },
      select: {
        id: true,
        userId: true,
        finalAmountInUSD: true,
        status: true,
        secretToken: true,
      },
    });

    if (!transaction)
      return res
        .status(404)
        .json({ message: "Transaction not found", status: "error" });

    // const isValidTransaction = await compareHash(
    //   secret_token,
    //   transaction.secretToken
    // );

    // if (!isValidTransaction) {
    //   return res.status(401).json({
    //     message: "Unauthorized Transaction",
    //     status: "error",
    //   });
    // }

    // Check for if the transaction is pending
    if (transaction.status === "COMPLETED") {
      return res.status(200).json({
        message: "Payment Successful",
      });
    }

    if (transaction.status === "CANCELLED") {
      return res.status(401).json({
        message: "Transaction already completed or cancelled",
        status: "error",
      });
    }

    // // Update transaction it as successful
    // await prisma.$transaction([
    //   // prisma.user.update(),
    //   prisma.transaction.update({
    //     where: { id: transaction.id },
    //     data: {
    //       status: "COMPLETED", // Mark transaction as completed
    //     },
    //   }),
    // ]);

  } catch (error) {
    console.error("Error recording purchase:", error);
    res.status(500).json({ error: "Failed to record purchase." });
  }
};

 import { Request,Response } from "express";
 import prisma from "../../prismaClient";

 export async function getPackages(req: Request, res: Response) {
    try {
      const packages = await prisma.package.findMany(); 
      res.status(200).json(packages); 
    } catch (error) {
      console.error("Error fetching packages:", error);
      res.status(500).json({ error: "Failed to retrieve packages." });
    }
  }
  
  // Function to get purchased packages by user
  export async function getUserPurchasedPackages(req: any, res: Response) {
    const user = req.user;
  
    try {
      const purchases = await prisma.subscription.findMany({
        where: {
          userId: user.id, 
          status:"ACTIVE"
        },
        include: {
          package: true, 
        },
      });
  
      if (purchases.length === 0) {
        return res.status(404).json({ message: "No packages found for this user." });
      }
  
      res.status(200).json(purchases); // Return the user's purchased packages
    } catch (error) {
      console.error("Error fetching user purchased packages:", error);
      res.status(500).json({ error: "Failed to retrieve purchased packages." });
    }
  }
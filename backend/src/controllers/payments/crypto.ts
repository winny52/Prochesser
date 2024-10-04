import { BINANCE_API_KEY, BINANCE_SECRET_KEY, NODE_ENV } from "../../constants";
import prisma from "../../prismaClient";
import { cloneDeep } from "lodash";

export async function convertCryptoToUSD(symbol: string, amount: number) {
    try {
      // Get the latest price for the symbol (e.g., BTCUSDT, ETHUSDT)
      console.log("NODE_ENV", NODE_ENV, NODE_ENV === "development");
  
      if (NODE_ENV === "development")
        console.log("Secret Token", BINANCE_API_KEY, BINANCE_SECRET_KEY);
  
      const Binance = require("binance-api-node").default;
      const client = Binance({
        apiKey: BINANCE_API_KEY,
        apiSecret: BINANCE_SECRET_KEY,
      });
  
      const prices = await client.prices();
  
      // Symbol example: 'BTCUSDT' for Bitcoin to USD, 'ETHUSDT' for Ethereum to USD
      const cryptoSymbol = `${symbol.toUpperCase()}USDT`; // e.g., 'BTCUSDT' or 'ETHUSDT'
  
      // Get the current price in USD
      const usdPrice = parseFloat(prices[cryptoSymbol]);
  
      if (!usdPrice) {
        throw new Error(`Price not available for ${symbol}`);
      }
  
      // Calculate the equivalent USD value for the given crypto amount
      const usdValue = usdPrice * amount;
  
      console.log(
        `${amount} ${symbol} is equivalent to $${usdValue.toFixed(2)} USD`
      );
      return usdValue;
    } catch (error: any) {
      console.error("Error fetching price:", error.message);
    }
  }


  export const checkTransactionStatus = async () => {
    try {
      // Get all successful transactions for past 15 mins
      const currentTime = Date.now();
      // Set the start time to 15 minutes ago
      const fifteenMinutesAgo = currentTime - 15 * 60 * 1000;
  
      if (NODE_ENV === "development")
        console.log("Secret Token", BINANCE_API_KEY, BINANCE_SECRET_KEY);
  
      const Binance = require("binance-api-node").default;
      const client = Binance({
        apiKey: BINANCE_API_KEY,
        apiSecret: BINANCE_SECRET_KEY,
      });
      const transactions = await client.depositHistory({
        status: 1,
        startTime: fifteenMinutesAgo,
        endTime: currentTime,
      });
      console.log(
        `Success Transactions between ${new Date(
          fifteenMinutesAgo
        )} and ${new Date(currentTime)}`
      );
      console.log(transactions);
      console.log("Transaction Count: ", transactions.length);
  
      if (!transactions || transactions.length === 0) {
        return;
      }
  
      const conditions = transactions.map((transaction: any) => {
        return {
          wallet_address: transaction.address,
          amount: transaction.amount,
          mode: "crypto",
          currency: transaction.coin,
          status: "PENDING",
        };
      });
  
      let dbTransactions = await prisma.transaction.findMany({
        where: {
          OR: conditions,
        },
      });
  
      if (!dbTransactions || dbTransactions.length === 0) {
        console.log("No pending transactions found in DB");
        return;
      }
  
      dbTransactions = matchTransactions(dbTransactions, transactions);
  
      console.log("Combined Transactions", dbTransactions);
  
      for (let i = 0; i < dbTransactions.length; i++) {
        const dbTransaction = transactions[i];
        console.log(dbTransaction);
  
  
        console.log("Transaction for ", dbTransaction, "updated");
        console.log(
          "Balance updated for User -> ",
          dbTransaction?.userId,
          "with $",
          dbTransaction?.finalamountInUSD
        );
      }
    } catch (error) {
      console.error("Currency conversion error:", error);
      throw new Error("Unable to convert currency.");
    }
  };
  
  function matchTransactions(dbTransactions: any[], transactions: any[]) {
    // Create a copy of transactions array to keep track of used transactions
    const availableTransactions = cloneDeep(transactions); // [...transactions];
  
    // Iterate over each dbTransaction
    dbTransactions.forEach((dbTransaction) => {
      // Find the first matching transaction
      const matchingIndex = availableTransactions.findIndex(
        (transaction) =>
          transaction.address === dbTransaction.wallet_address &&
          transaction.amount === dbTransaction.amount &&
          transaction.coin === dbTransaction.currency
      );
  
      // If a matching transaction is found
      if (matchingIndex !== -1) {
        // Assign the txId to the dbTransaction
        dbTransaction.txId = availableTransactions[matchingIndex].txId;
  
        // Remove the used transaction from the availableTransactions array
        availableTransactions.splice(matchingIndex, 1);
      }
    });
  
    return dbTransactions;
  }
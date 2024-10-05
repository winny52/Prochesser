
import express from "express";
const {
  getURL,successTransaction, getId
} = require('../controllers/payments/crypto');
const {authenticateJWT}=require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/get-url", authenticateJWT, getURL);
router.post("/success/transaction",successTransaction);
router.post("/get-wallet-address", authenticateJWT,getId);

export default router;
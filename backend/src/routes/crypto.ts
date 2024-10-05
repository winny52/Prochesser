
import express from "express";
const {
  successTransaction, getId
} = require('../controllers/payments/crypto');
const {authenticateJWT}=require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/get-wallet-address", authenticateJWT,getId);

export default router;
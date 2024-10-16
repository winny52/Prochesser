// src/routes/authRoutes.ts

import express from "express";
import { validateLogin, validateSignup } from "../middlewares/authMiddleware";
import {
  ForgotPassword,
  resetPassword,
  verifyResetToken,
  verifyPasswordToken,
} from "../controllers/auth/forgotPassword";
const {
  Signup,
  Login,
  refresh,
} = require("../controllers/auth/authController");
const { authenticateJWT } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", validateSignup, Signup);
router.post("/login", validateLogin, Login);
router.get("/refresh", authenticateJWT, refresh);
router.get(`/verify/:token`, verifyPasswordToken);
router.post("/forgotpassword", ForgotPassword);
router.post("/newsletter", ForgotPassword);
router.get("/verifyResetToken/:token", verifyResetToken);
router.post("/updateforgotpassword", resetPassword);

export default router;

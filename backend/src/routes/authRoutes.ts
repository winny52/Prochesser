// src/routes/authRoutes.ts

import express from 'express';
import { validateLogin, validateSignup } from '../middlewares/authMiddleware';
const {Signup,Login,refresh}= require('../controllers/authController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', validateSignup,Signup);
router.post('/login',validateLogin, Login);
router.get("/refresh",authenticateJWT,refresh)

export default router;

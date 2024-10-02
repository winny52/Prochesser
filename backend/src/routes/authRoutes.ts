// src/routes/authRoutes.ts

import express from 'express';
const {Signup,Login,refresh}= require('../controllers/authController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.get("/refresh",authenticateJWT,refresh)

export default router;

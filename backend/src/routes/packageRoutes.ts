import express from 'express';
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {getPackages,getUserPurchasedPackages}=require("../controllers/package")
const router = express.Router();




router.get('/get-packages', authenticateJWT,getPackages);
router.get('/get-user-packages',authenticateJWT,getUserPurchasedPackages );

export default router;

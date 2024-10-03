import express from 'express';
const {getUrl,successFullTransaction}= require('../controllers/payments/mpesa');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/get-url', authenticateJWT,getUrl);
router.post('/successful-transaction',successFullTransaction);

export default router;

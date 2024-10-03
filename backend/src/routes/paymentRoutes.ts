import express from 'express';
const {getUrl,successFullTransacation}= require('../controllers/payments/index');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/get-url', authenticateJWT,getUrl);
router.post('/successful-transaction',authenticateJWT, successFullTransacation);

export default router;

import express,{Request,Response} from 'express';
import authRoutes from './routes/authRoutes';
import paymentRouter from "./routes/mpesapaymentRoutes"
import packagesRouter from "./routes/packageRoutes"
import cryptoPaymentRouter from "./routes/crypto";
import { BACKEND_ROUTE } from './constants';
import cors from "cors";
// import { checkTransactionStatus } from './controllers/payments/crypto';
const cron = require('node-cron');
const app = express();
const PORT  = process.env.PORT
app.use(express.json());
app.use(cors());

app.get('/',(req:Request,res:Response)=>{
    res.send("hellow")
})

app.use(`/${BACKEND_ROUTE}/cryptopayment`,cryptoPaymentRouter);
app.use(`/${BACKEND_ROUTE}/auth`, authRoutes);
app.use(`/${BACKEND_ROUTE}/payment`,paymentRouter);
app.use(`/${BACKEND_ROUTE}/packag`,packagesRouter);

// cron.schedule('* * * * *', async () => {
//     await checkTransactionStatus();
//   });

app.listen(PORT,()=>console.log(`Listening at port ${PORT}`))
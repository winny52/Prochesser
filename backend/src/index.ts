import express,{Request,Response} from 'express';
import authRoutes from './routes/authRoutes';
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.get('/',(req:Request,res:Response)=>{
    res.send("hellow")
})

app.use('/api/auth', authRoutes);

app.listen(3000,()=>console.log("Listening at port 3000"))
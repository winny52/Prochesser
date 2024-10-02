import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

app.use('/api/auth', authRoutes);

app.listen(5000,()=>console.log("Listening at port 5000"))
// src/controllers/authController.ts

import prisma from '../../prismaClient';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils';

const saltRounds = 10;

export const Signup = async (req: any, res: any) => {
  console.log(req.body);
  
  const { firstname, lastname, password,email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
console.log('nlkvklam',existingUser);

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstname,
        lastname,
      },
    });

    const token = generateToken({ userId: user.id });

    res.status(201).json({ token});
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const Login = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    // Find usera
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid Credentials' });

    // Generate JWT
    const token = generateToken({ userId: user.id });

    res.status(200).json({ token});
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const refresh =  async (req:any,res:any)=>{
  try {
    if (req.user) {
      res.status(200).json({...req.user});
    } else {
      res.status(401).json({
        user: null,
        message: "Unauthorized",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
}

import { randomUUID } from 'crypto';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET?? "SECRET_KEY"

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

export const generateToken = (obj: Object, expiresIn: string = "10h") => {
    const token = jwt.sign(obj, JWT_SECRET, {
      expiresIn,
    });
    return token;
  };
  
  export function generateUniqueId(): string {
    return randomUUID();
  }
  
  export function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

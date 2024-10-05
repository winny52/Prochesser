import axios from 'axios';
import crypto,{ randomUUID } from 'crypto';
import jwt from 'jsonwebtoken';
import { BCRYPT_SECRET_KEY, CURRENCY_RATE_URL } from './constants';
import bcrypt from "bcrypt";
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

  
export async function getFinalAmountInCurrency(amount: number, currency: string) {
  let rates: any = {};
  try {
    const response = await axios.get(`${CURRENCY_RATE_URL}/KES`);
    rates = response.data;
  } catch (error) {
    console.log("Error fetching currency rates", error);
    return amount;
  }

  if (!rates || !rates?.rates || !rates?.rates?.[currency]) {
    console.log(
      `Currency "${currency}" not found in ->`,
      rates,
      rates?.rates,
      rates?.rates?.[currency]
    );
    return false;
  }

  return parseFloat((amount / rates.rates[currency]).toFixed(2));
}

export async function compareHash(password: string, storedHash: string): Promise<boolean> {
  const passwordWithSecret = password + BCRYPT_SECRET_KEY;

  try {
    const isMatch = await bcrypt.compare(passwordWithSecret, storedHash);
    console.log("IS Matching", isMatch)

    return isMatch;
  } catch (error) {
    console.error('Error comparing hash');
    return false;
  }
}

export const generateSignature = (data: string) => {
  return crypto.createHash("md5").update(data).digest("hex");
};
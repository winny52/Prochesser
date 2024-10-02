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
  
import { Request,Response,NextFunction } from "express";
import prisma from "../prismaClient";
import { verifyToken } from "../utils";


export const authenticateJWT = async (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
  
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      const decoded: any = verifyToken(token);
      const user = await prisma.user.findFirst({
        where: {
          email: decoded.email,
        },
        select: {
          id: true,
          firstname: true,
          lastname:true,
          purchases:true,
          email: true,
        }
      });
  
      if (!user) return res.status(403).json({ message: "User not found" });
      
      req.user = { user, token };
      next();
    } catch (error) {
      console.log(error)
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
  };
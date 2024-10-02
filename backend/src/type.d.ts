
declare global {
  namespace Express {
    interface Request {
      user?: any; // Use the User type if you have one, or any type
    }
  }
}

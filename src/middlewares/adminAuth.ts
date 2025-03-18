import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AdminRequest extends Request {
    admin?: { id: string; role: string };
  }
  
  const adminAuth = (req: AdminRequest, res: Response, next: NextFunction): void => {
    try {
      const token = req.cookies.accessToken;
      if (!token) {
        res.status(401).json({ message: "Unauthorized, no token" });
        return; // Ensure function ends here
      }
  
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; role: string };
  
      if (decoded.role !== "admin") {
        res.status(403).json({ message: "Forbidden, not an admin" });
        return;
      }
  
      req.admin = decoded;
      next(); // Call next() to proceed
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
  
  export default adminAuth;
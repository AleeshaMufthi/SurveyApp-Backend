import { Request, Response } from "express";
import { IAdminService } from "../interfaces/adminInterfaces/IAdminService";

export default class AdminController {
  private _adminService: IAdminService;

  constructor(adminService: IAdminService) {
    this._adminService = adminService;
  }

  async adminLogin(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const {admin,token} = await this._adminService.loginAdmin(email, password);
      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 15 * 60 * 1000, // 15 minutes
      });
      res.status(200).json({ message: "Login successful", admin });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }

  async getAdminDetails(req: Request, res: Response): Promise<void> {
    try {
      const adminId = (req as any).admin.id;
      const admin = await this._adminService.getAdminDetails(adminId);
      res.status(200).json(admin);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  logoutAdmin(req: Request, res: Response): void {
    res.clearCookie("accessToken");
    res.status(200).json({ message: "Logged out successfully" });
  }
}

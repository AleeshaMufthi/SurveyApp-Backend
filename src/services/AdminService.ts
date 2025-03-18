import jwt  from "jsonwebtoken";
import { IAdminRepository } from "../interfaces/adminInterfaces/IAdminRepository";
import { IAdmin } from "../interfaces/adminInterfaces/IAdmin";
import { IAdminService, responseLogin } from "../interfaces/adminInterfaces/IAdminService";


class AdminService implements IAdminService {
  private _adminRepository: IAdminRepository;

  constructor(adminRepository: IAdminRepository) {
    this._adminRepository = adminRepository;
  }

  async loginAdmin(email: string, password: string): Promise<responseLogin> {
    const admin = await this._adminRepository.findAdminByEmail(email);
    if (!admin) {
      throw new Error("Invalid email credentials");
    }

    if (password !== admin.password) {
      throw new Error("Invalid password credentials");
    }

    // Generate JWT token
    const payload = { id: admin._id, role: "admin" };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "15m" });

    return {admin,token:accessToken};
  }

  async getAdminDetails(adminId: string): Promise<IAdmin> {
    const admin = await this._adminRepository.findAdminById(adminId);
    if (!admin) {
      throw new Error("Admin not found");
    }
    return admin;
  }
}

export default AdminService;
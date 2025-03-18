import AdminModel from "../models/AdminModel";
import { IAdmin } from "../interfaces/adminInterfaces/IAdmin";
import { IAdminRepository } from "../interfaces/adminInterfaces/IAdminRepository";

class AdminRepository implements IAdminRepository {
  async findAdminByEmail(email: string): Promise<IAdmin | null> {
    return await AdminModel.findOne({ email });
  }

  async findAdminById(id: string): Promise<IAdmin | null> {
    return await AdminModel.findById(id).select("-password");
  }
}
  
  export default AdminRepository;
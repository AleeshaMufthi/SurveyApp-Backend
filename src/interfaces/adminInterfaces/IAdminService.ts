import { JwtPayload } from "jsonwebtoken";
import { IAdmin } from "./IAdmin";

export interface responseLogin{
  admin:IAdmin,
  token:string
}

export interface IAdminService {
  loginAdmin(email: string, password: string): Promise<responseLogin>;
  getAdminDetails(adminId: string): Promise<IAdmin>;
}
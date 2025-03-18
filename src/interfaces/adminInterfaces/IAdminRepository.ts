import { IAdmin } from "./IAdmin";

export interface IAdminRepository {
    findAdminByEmail(email: string): Promise<IAdmin | null>;
    findAdminById(id: string): Promise<IAdmin | null>;
  }
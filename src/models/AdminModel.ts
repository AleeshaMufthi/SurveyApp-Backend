import { Schema, model, Document } from "mongoose";
import { IAdmin } from "../interfaces/adminInterfaces/IAdmin";
  
  const adminSchema = new Schema<IAdmin>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  });
  
  const AdminModel = model<IAdmin>("admin", adminSchema);
  export default AdminModel;
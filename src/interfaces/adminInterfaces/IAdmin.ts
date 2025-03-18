import { Types } from "mongoose";

export interface IAdmin extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
  }
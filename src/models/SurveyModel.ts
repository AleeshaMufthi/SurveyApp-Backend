import mongoose, { Schema, model, Document } from "mongoose";
import { ISurvey } from "../interfaces/surveyInterfaces/ISurvey";

  const SurveySchema = new Schema<ISurvey>(
    {
      name: { type: String, required: true },
      gender: { type: String, required: true },
      nationality: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      message: { type: String, required: true },
    },
    { timestamps: true }
  );

const surveyModel = model<ISurvey>("survey", SurveySchema)
export default surveyModel

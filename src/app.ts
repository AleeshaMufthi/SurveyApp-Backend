import express from "express";
import corsConnection from "./config/corsConnection";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect";
import surveyRoutes  from "./routes/SurveyRoute";
import adminRoutes from "./routes/AdminRoute";

dotenv.config();
connectDB();

const app = express();

app.use(corsConnection);

app.use(express.json());

app.use("/survey", surveyRoutes);
app.use("/admin", adminRoutes);

export default app;
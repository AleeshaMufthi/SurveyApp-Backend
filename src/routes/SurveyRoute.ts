import express from "express";
import SurveyController from "../controllers/SurveyController";
import SurveyService from "../services/SurveyService";
import SurveyRepository from "../repositories/SurveyRepository";

const surveyRepository = new SurveyRepository();
const surveyService = new SurveyService(surveyRepository);
const surveyController = new SurveyController(surveyService);

const router = express.Router();

router.post("/create",surveyController.createSurvey.bind(surveyController));
router.get("/details",surveyController.getAllSurveys.bind(surveyController));

export default router;
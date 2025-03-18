import { Request, Response } from "express";
import SurveyService from "../services/SurveyService";

export default class SurveyController {
  private surveyService: SurveyService;  // Add a private property

  constructor(surveyService: SurveyService) {  // Add a constructor
    this.surveyService = surveyService;
  }

  async createSurvey(req: Request, res: Response): Promise<void> {
    try {
      const survey = await this.surveyService.createSurvey(req.body);  // Use instance method
      console.log(survey,'survey');
      
      res.status(201).json(survey);
    } catch (error) {
      res.status(500).json({ error: "Failed to submit survey" });
    }
  }

  async getAllSurveys(req: Request, res: Response): Promise<void> {
    try {
      const surveys = await this.surveyService.getAllSurveys();  // Use instance method
      res.status(200).json(surveys);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve surveys" });
    }
  }
}
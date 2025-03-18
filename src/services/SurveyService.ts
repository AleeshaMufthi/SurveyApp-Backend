import SurveyRepository from "../repositories/SurveyRepository";
import { ISurvey } from "../interfaces/surveyInterfaces/ISurvey";
import { ISurveyService } from "../interfaces/surveyInterfaces/ISurveyService";

class SurveyService implements ISurveyService {
  private _surveyRepository: SurveyRepository;

  constructor(surveyRepository: SurveyRepository) {
    this._surveyRepository = surveyRepository; 
  }

  async createSurvey(data: ISurvey): Promise<ISurvey> {
    return await this._surveyRepository.createSurvey(data);
  }

  async getAllSurveys(): Promise<ISurvey[]> {
    return await this._surveyRepository.getAllSurveys();
  }

  async getSurveyById(id: string): Promise<ISurvey | null> {
    return await this._surveyRepository.getSurveyById(id);
  }
}

export default SurveyService

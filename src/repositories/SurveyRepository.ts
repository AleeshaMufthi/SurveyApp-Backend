import surveyModel from "../models/SurveyModel";
import { ISurvey } from "../interfaces/surveyInterfaces/ISurvey";
import { ISurveyRepository } from "../interfaces/surveyInterfaces/ISurveyRepository";

class SurveyRepository implements ISurveyRepository {
  async createSurvey(data: ISurvey): Promise<ISurvey> {
    try {
       return await surveyModel.create(data) as unknown as  ISurvey
      
    } catch (error) {
      console.log(error)
      throw error
      
    }
   
  }

  async getAllSurveys(): Promise<ISurvey[]> {
    return await surveyModel.find();
  }

  async getSurveyById(id: string): Promise<ISurvey | null> {
    return await surveyModel.findById(id);
  }
}

export default SurveyRepository;
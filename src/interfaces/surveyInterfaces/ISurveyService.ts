import { ISurvey } from "./ISurvey";

export interface ISurveyService {
    createSurvey(data: ISurvey): Promise<ISurvey>;
    getAllSurveys(): Promise<ISurvey[]>;
    getSurveyById(id: string): Promise<ISurvey | null>;
  }
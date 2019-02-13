import { Service, Container } from '../../node_modules/typedi';
import { AboutRequest } from '../models/request-responses/about/AboutRequest';
import {AboutResponse } from '../models/request-responses/about/AboutResponse';
import { DBManager } from '../utils/db-manager';
import { DBQueries } from '../constants/db-queries';
import { AppError } from '../models/AppError';
import { ErrorConstants } from '../constants/error-constants';
export class AboutDelegate{
    dbManager : DBManager;
    constructor(){
        this.dbManager = Container.get(DBManager);
    }
    async getAbout(getAboutRequest: AboutRequest): Promise<any> {
        try {
            const aboutQueryResult = await this.dbManager.executeQuery(DBQueries.GET_ABOUT, [getAboutRequest.userId]);
            if (aboutQueryResult.length > 0){
                console.log(aboutQueryResult);
                const getAboutResponse:AboutResponse = new AboutResponse(aboutQueryResult);
                return getAboutResponse;
            }
            else
                return Promise.reject(new AppError(ErrorConstants.DATABASE_ERROR.CODE, ErrorConstants.DATABASE_ERROR.DESCRIPTION));
        } catch (error) {
            return Promise.reject(new AppError(ErrorConstants.DATABASE_ERROR.CODE, ErrorConstants.DATABASE_ERROR.DESCRIPTION));
        }

}
}
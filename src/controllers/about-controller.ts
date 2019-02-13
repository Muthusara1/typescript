import { Service, Container } from '../../node_modules/typedi';
import { JsonController, Get, Post, Req, Res, Param, Body } from "../../node_modules/routing-controllers";
import { Request, Response } from "../../node_modules/@types/express";
import { AboutRequest } from '../models/request-responses/about/AboutRequest';
import { AboutDelegate } from '../delegates/AboutDelegate';
import { ErrorConstants } from '../constants/error-constants';
import { AppError } from '../models/AppError';
import { SuccessResponse } from '../models/SuccessResponse';
import { ErrorResponse } from '../models/ErrorResponse';

@Service()
@JsonController("/about")
export class AboutController{
     aboutDelegate:AboutDelegate;
     constructor(){
       this.aboutDelegate=Container.get(AboutDelegate);
     }
    @Get("/:userId")
    async getAbout(@Req() req: Request,@Res() res: Response,@Param("userId")userId: string):Promise<any>{
        try{
        const aboutRequest:AboutRequest = new AboutRequest(userId,"");
        console.log(userId);
        const response = await this.aboutDelegate.getAbout(aboutRequest);
        if (response) {
            return res.send(new SuccessResponse(response));
        } else {
            return res.send(new ErrorResponse(new AppError(ErrorConstants.USER_NOT_FOUND.CODE, ErrorConstants.USER_NOT_FOUND.DESCRIPTION)));
        }
    } catch (error) {
        return res.send(new ErrorResponse(error));
    }

    }


}
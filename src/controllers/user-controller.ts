import { Service, Container } from "typedi";
import { JsonController, Post, Req, Res, Body, Get, Put, Param, Delete } from "routing-controllers";
import { Response, Request } from "express-serve-static-core";
import { UserManagementDelegate } from "../delegates/user-delegate";
import { AddUserRequest } from "../models/request-responses/add-user/addUserRequest";

@Service()
@JsonController("/users")
export class UserManagementController {
    userManagementDelegate: UserManagementDelegate;
    constructor(){
        // We use typedi to get the instance of UserManagementDelegate
        this.userManagementDelegate = Container.get(UserManagementDelegate);
    }

    @Post("/")
    async addUser(@Req() req: Request, @Res() res: Response, @Body() addUserRequest: AddUserRequest): Promise<any> {
        try {
            const response = await this.userManagementDelegate.addUser(addUserRequest);
            res.send(true);  
        } 
        catch(err) {
            res.send(err);
        }
    }

}
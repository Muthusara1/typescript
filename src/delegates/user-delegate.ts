import { Service, Container } from "typedi";
import { DBManager } from "../utils/db-manager";
import { AddUserRequest } from "../models/request-responses/add-user/addUserRequest";
import { DBQueries } from "../constants/db-queries";
import { AddUserResponse } from "../models/request-responses/add-user/addUserResponse";

@Service()
export class UserManagementDelegate {
    
    dbManager: DBManager;
    constructor() {
        this.dbManager = Container.get(DBManager);
    }
    async addUser(addUserRequest: AddUserRequest): Promise<any> {
        const rowInserted = await this.dbManager.executeQuery(DBQueries.ADD_USER, [addUserRequest.name, addUserRequest.password, addUserRequest.userId, addUserRequest.userName, addUserRequest.email, addUserRequest.gender, addUserRequest.dob, addUserRequest.address]);
        const getUserDetails = await this.dbManager.executeQuery(DBQueries.GET_USER_DETAILS, [addUserRequest.email]);
        const addUserResponse = new AddUserResponse(getUserDetails);
        const userId = addUserResponse.addUserRequest[0].userId;
        return addUserResponse;
    }
}
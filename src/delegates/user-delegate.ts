import { Service, Container } from "typedi";
import { DBManager } from "../utils/db-manager";
import { AddUserRequest } from "../models/request-responses/add-user/addUserRequest";

@Service()
export class UserManagementDelegate {
    
    dbManager: DBManager;
    constructor() {
        this.dbManager = Container.get(DBManager);
    }
    async addUser(addUserRequest: AddUserRequest): Promise<any> {
        //const rowInserted = await this.dbManager.executeQuery()
    }
}
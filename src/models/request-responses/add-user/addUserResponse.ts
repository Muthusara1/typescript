import { GenericResponse } from "../../GenericResponse";
import { AddUserRequest } from "./addUserRequest";

export class AddUserResponse implements GenericResponse {

    addUserRequest: Array<AddUserRequest>;

    constructor(addUserRequest: Array<AddUserRequest>) {
        this.addUserRequest = addUserRequest;
    }

    parseResponseBody(): any {
        return this;
    }
}
import { GenericResponse } from "../../GenericResponse";
import { AboutRequest } from "./AboutRequest";

export class AboutResponse implements GenericResponse {
    aboutRequest: AboutRequest;
    constructor(aboutRequest: AboutRequest) {
        this.aboutRequest = aboutRequest;
    }
    parseResponseBody(): any {
        return this;
    }
}
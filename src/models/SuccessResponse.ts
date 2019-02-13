export class SuccessResponse {
    isSuccess: boolean = true;
    responseBody: any;
    constructor(response?: any) {
        this.responseBody = response;
    }
}

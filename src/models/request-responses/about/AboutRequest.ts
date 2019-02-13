export class AboutRequest{
    userId:string;
    about:string;
    constructor(userId:string,about:string){
        this.userId=userId;
        this.about=about;
    }
}
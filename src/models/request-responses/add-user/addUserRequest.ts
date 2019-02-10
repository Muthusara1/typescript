export class AddUserRequest {
    userId: number;
    userName: string;
    name: string;
    email: string;
    password: string;
    dob: string;
    gender: string;
    address:string;

    constructor(userId: number, userName: string, password: string, name: string, phoneNumber: string, emailId: string, dob: string, gender: string, address: string) {
        this.userId = userId;
        this.userName = userName;
        this.name = name;
        this.password = password;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
    }
}
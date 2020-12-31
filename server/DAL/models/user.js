import mongo from "mongodb";

export default class User {
    constructor(email, fName, lName, age, bDate, pass, friends = []) {
        this.email = email;
        this.firstName = fName;
        this.lastName = lName;
        this.password = pass;
        this.age = new mongo.Int32(age);
        this.birthDate = bDate;
        this.socialMediaFriends = friends;
    }
}
const mongo = require("mongodb");

module.exports = class User {
    constructor(email, fName, lName, age, bDate, friends = [], pic) {
        this.email = email;
        this.firstName = fName;
        this.lastName = lName;
        this.age = new mongo.Int32(age);
        this.birthDate = bDate;
        this.socialMediaFriends = friends;
        this.profilePic = pic;
    }
}
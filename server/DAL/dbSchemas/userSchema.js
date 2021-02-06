const userSchema = {
    bsonType: "object",
    required: ["email", "firstName", "lastName"],
    properties: {
        _id: {
            bsonType: "objectId"
        },
        email: {
            bsonType: "string",
            description: "must be a string and is required"
        },
        firstName: {
            bsonType: "string",
            description: "must be a string and is required"
        },
        lastName: {
            bsonType: "string",
            description: "must be a string and is required"
        },
        age: {
            bsonType: "int",
            description: "must be an integer if it exists"
        },
        birthDate: {
            bsonType: "date"
        },
        socialMediaFriends: {
            bsonType: ["array"]
        }//contains list of friends names/ids
    }
}

module.exports = userSchema;
const messageSchema = {
    bsonType: "object",
    required: [ "senderId", "recieverId"],//receiver Id could be a groupId
    properties: {
        senderId: {
          bsonType: "objectId",
          description: "must be a string and is required"
       },
       recieverId: {
           bsonType: "objectId",
           description: "must be a string and is required"
       },
       content: {
           bsonType: ["string"],
           description: "must be a string"
       },
       sentAt: {
           bsonType: "date",
           description: "must be a date"
       }
    }
 }

 export default messageSchema;
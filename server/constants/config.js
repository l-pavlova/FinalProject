 const MONGO_HOST = "mongodb://localhost:27017";
 const MONGO_PROD = process.env.MONGODB_URI;
 const DB_NAME = "messaging-platform";
 const SERVER_PORT = "3001"

 module.exports = {
    MONGO_HOST,
    DB_NAME,
    SERVER_PORT,
 }
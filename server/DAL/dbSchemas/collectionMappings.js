const userSchema  = require("./userSchema.js");
const groupSchema = require("./groupSchema.js");
const messageSchema = require("./messageSchema.js");

const collectionMap = new Map()
collectionMap.set("User", userSchema);
collectionMap.set("Group", groupSchema);
collectionMap.set("Message", messageSchema);

module.exports = collectionMap;
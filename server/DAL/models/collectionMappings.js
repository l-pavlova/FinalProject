const userSchema = require("./user");
const groupSchema = require("./group");
const messageSchema = require("./message");

const collectionMap = new Map()
collectionMap.set("User", userSchema);
collectionMap.set("Group", groupSchema);
collectionMap.set("Message", messageSchema);

module.exports = collectionMap;
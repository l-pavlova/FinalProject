import userSchema  from "./user.js";
import groupSchema from "./group.js";
import messageSchema from "./message.js";

const collectionMap = new Map()
collectionMap.set("User", userSchema);
collectionMap.set("Group", groupSchema);
collectionMap.set("Message", messageSchema);

export default collectionMap;
import userSchema  from "./userSchema.js";
import groupSchema from "./groupSchema.js";
import messageSchema from "./messageSchema.js";

const collectionMap = new Map()
collectionMap.set("User", userSchema);
collectionMap.set("Group", groupSchema);
collectionMap.set("Message", messageSchema);

export default collectionMap;
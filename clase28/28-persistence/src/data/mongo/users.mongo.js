import MongoManager from "./manager.mongo.js";
import User from "./user.model.js";

const users = new MongoManager(User);
export default users;

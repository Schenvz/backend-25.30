import MongoManager from "./manager.mongo.js";
import Comment from "./comment.model.js";

const comments = new MongoManager(Comment);
export default comments;

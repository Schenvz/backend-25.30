import MongoManager from "./manager.mongo.js";
import Event from "./event.model.js";

const events = new MongoManager(Event);
export default events;

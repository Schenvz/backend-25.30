import MongoManager from "./manager.mongo.js";
import Order from "./order.model.js";

const orders = new MongoManager(Order);
export default orders;

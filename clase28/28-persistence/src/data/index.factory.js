import argsUtil from "../args.util.js";
import dbConnection from "../dbConnection.util.js"

const environment = argsUtil.env;
//la variable puede variar dependiendo el ambiente o directamente la persistencia con la que hay que trabajar
//va a depender de una variable de entorno o del argumento que suceda primero

let dao = {};

switch (environment) {
  case "test":
    //usamos MEMORY
    console.log("MEMORY CONNECTED");
    const { default: eventsMemory } = await import("./events.memory.js")
    dao = { events: eventsMemory }
    break;
  case "dev":
    //usamos FS
    console.log("FS CONNECTED");
    const { default: eventsFs } = await import("./events.fs.js")
    const { default: usersFs } = await import("./users.fs.js")
    const { default: ordersFs } = await import("./orders.fs.js")
    const { default: commentsFs } = await import("./comments.fs.js")
    dao = { events: eventsFs, users: usersFs, orders: ordersFs, comments: commentsFs }
    break;
  case "prod":
    //usamos MONGO
    //hay que configurar la conexión de mongo
    dbConnection()
      .then(() => console.log("MONGO CONNECTED"))
    const { default: eventsMongo } = await import("./events.mongo.js")
    const { default: usersMongo } = await import("./users.mongo.js")
    const { default: ordersMongo } = await import("./orders.mongo.js")
    const { default: commentsMongo } = await import("./comments.mongo.js")
    dao = { events: eventsMongo, users: usersMongo, orders: ordersMongo, comments: commentsMongo }
    break;
  default:
    break;
}

export default dao;

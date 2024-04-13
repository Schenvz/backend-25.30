import { socketServer } from "../../server.js";
import events from "../events.fs.js";
import propsEventsUtils from "./propsEvents.util.js";

export default (socket) => {
  console.log("client " + socket.id + " connected");
  socket.emit("movies", events.readEvents());
  socket.on("newMovie", async (data) => {
    try {
      propsEventsUtils(data);
      await events.createEvent(data);
      socketServer.emit("movies", events.readEvents());
    } catch (error) {
      console.log(error);
    }
  });
};

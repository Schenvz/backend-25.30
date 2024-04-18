import { Router } from "express";
import notesRouter from "../api/notes.router.api.js";
import authRouter from "../api/auth.router.api.js";

const apiRouter = Router();

apiRouter.use("/notes", notesRouter);
apiRouter.use("/auth", authRouter);

export default apiRouter;


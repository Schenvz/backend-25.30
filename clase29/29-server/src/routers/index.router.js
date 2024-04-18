import { Router } from "express";
import apiRouter from "../routers/api/index.router.api.js";

const router = Router();
router.use("/api", apiRouter);

export default router;

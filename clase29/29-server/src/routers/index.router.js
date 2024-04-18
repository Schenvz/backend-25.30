import { Router } from "express";
import apiRouter from "../utils/";

const router = Router();
router.use("/api", apiRouter);

export default router;

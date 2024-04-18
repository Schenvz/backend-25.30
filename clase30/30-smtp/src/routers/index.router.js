import { Router } from "express";
<<<<<<< HEAD
import apiRouter from "../routers/api/index.router.api.js";
=======
import apiRouter from "../routers/api/index.router.api";
>>>>>>> 9d9721b35ab7726089a4d3b2df33f73504cab1e6
import sendSms from "../utils/sendSms.utils.js";

const router = Router();
router.use("/api", apiRouter);

export default router;

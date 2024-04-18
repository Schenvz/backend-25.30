import CustomRouter from "./CustomRouter.js";
import apiRouter from "./index.router.api.js";
import ViewsRouter from "../routers/api/index.router.api.js";

const views = new ViewsRouter();
const viewsRouter = views.getRouter();
class IndexRouter extends CustomRouter {
  init() {
    this.router.use("/api", apiRouter);
    this.router.use("/", viewsRouter);
  }
}

const router = new IndexRouter();
export default router.getRouter();
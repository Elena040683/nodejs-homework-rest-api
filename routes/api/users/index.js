import { Router } from "express";
import { aggregation } from "../../../controllers/users/index";
import guard from "../../../middlewares/guard";

const router = new Router();

router.get("/stats/:id", guard, aggregation);

export default router;

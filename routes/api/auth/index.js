import { Router } from "express";
import {
  registration,
  login,
  logout,
  getCurrentUser,
} from "../../../controllers/auth/index";
import guard from "../../../middlewares/guard";
import limiter from "../../../middlewares/rate-limit";
const router = new Router();

router.post("/registration", limiter(15 * 60 * 1000, 2), registration);
router.post("/login", login);
router.post("/logout", guard, logout);

router.get("/current", guard, getCurrentUser);

export default router;

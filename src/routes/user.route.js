import { Router } from "express";
import { register, login, listUsers } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", authMiddleware, listUsers);

export default router;

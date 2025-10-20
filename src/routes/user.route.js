import { Router } from "express";
import { saveUser, updateUser, login, listUsers } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/save", saveUser);
router.post("/login", login);
router.get("/", authMiddleware, listUsers);
router.put("/update", authMiddleware, updateUser);

export default router;

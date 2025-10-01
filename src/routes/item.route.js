import { Router } from "express";
import { save, listItems, update } from "../controllers/item.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/save", authMiddleware, save);
router.post("/update", authMiddleware, update);
router.get("/get", authMiddleware, listItems);

export default router;

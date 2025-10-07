import { Router } from "express";
import { save, update, listPrints } from "../controllers/print.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/save", authMiddleware, save);
router.post("/update", authMiddleware, update);
router.get("/get", authMiddleware, listPrints);
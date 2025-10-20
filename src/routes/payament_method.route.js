import { Router } from "express";
import { savePaymentMethod, updatePaymentMethod, listPaymentMethods } from "../controllers/payment_method.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/save", authMiddleware, savePaymentMethod);
router.put("/update", authMiddleware, updatePaymentMethod);
router.get("/", authMiddleware, listPaymentMethods);

export default router;

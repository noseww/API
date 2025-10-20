import { Router } from "express";
import userRoutes from "./user.route.js";
import productRoutes from "./product.route.js";
import paymentMethodRoutes from "./payament_method.route.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/payment-methods", paymentMethodRoutes);

export default router;

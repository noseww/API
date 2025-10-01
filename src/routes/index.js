import { Router } from "express";
import userRoutes from "./user.route.js";
import itemRoutes from "./item.route.js"

const router = Router();

router.use("/users", userRoutes);
router.use("/items", itemRoutes)

export default router;

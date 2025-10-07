import { Router } from "express";
import userRoutes from "./user.route.js";
import itemRoutes from "./item.route.js";
import printRoutes from "./print.route.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/print", printRoutes);

export default router;

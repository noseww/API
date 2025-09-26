import express from "express";
import helmet from "helmet";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(helmet());         // Seguridad
app.use(express.json());   // Body parser
app.use("/api", routes);   // Rutas principales
app.use(errorMiddleware);  // Manejo de errores

export default app;

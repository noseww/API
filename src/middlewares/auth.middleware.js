import jwt from "jsonwebtoken";
import env from "../config/env.js";

export const authMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) return res.status(401).json({ message: "Sin token proporcionado" });

    const token = header.split(" ")[1];
    jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Token inválido" });
        req.user = decoded;
        next();
    });
};

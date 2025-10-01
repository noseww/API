import sequelize from "../config/db.js"
import User from "./user.model.js";
import Item from "./item.model.js";

const db = { sequelize, User, Item };

export default db;
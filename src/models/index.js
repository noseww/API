import sequelize from "../config/db.js";
import User from "./user.model.js";
import Item from "./item.model.js";
import Print from "./print.model.js";

const db = { sequelize, User, Item, Print };

export default db;
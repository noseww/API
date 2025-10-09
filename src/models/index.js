import sequelize from "../config/db.js";
import User from "./user.model.js";
import Item from "./item.model.js";
import Print from "./print.model.js";
import PayamentMethod from "./payament_method.model.js";
import Product from "./product.model.js";
import Transaction from "./transaction.model.js";
import DetailTransaction from "./detail_transaction.model.js";

Product.hasOne(Item, {
    foreignKey: "id_item",
    as: "item"
});

Item.belongsTo(Product, {
    foreignKey: "id_item",
    as: "product"
});

Product.hasOne(Print, {
    foreignKey: "id_print",
    as: "print"
});

Print.belongsTo(Product, {
    foreignKey: "id_printF",
    as: "product"
});

const db = { sequelize, User, PayamentMethod, Product };

export default db;
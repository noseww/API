import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Print = sequelize.define("Print", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type_print: { type: DataTypes.STRING, allowNull: false },
    type_paper: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false }
});

export default Print;
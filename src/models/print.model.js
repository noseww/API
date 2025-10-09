import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Print = sequelize.define("print", {
    id_print: {
        type: DataTypes.INTEGER,
        primaryKey: true, references: { model: "product", key: "id_product" }
    },
    type_print: { type: DataTypes.STRING, allowNull: false },
    type_paper: { type: DataTypes.STRING, allowNull: false },
}, { tableName: "print", timestamps: true });

export default Print;
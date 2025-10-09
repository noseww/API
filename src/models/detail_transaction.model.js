// models/DetalleTransaccion.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"

const DetailTransaction = sequelize.define("detail_transaction", {
    id_detail_transaction: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    mount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, { tableName: "detail_transaction", timestamps: true });

export default DetailTransaction;
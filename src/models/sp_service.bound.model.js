import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const SpecialServiceBound = sequelize.define("special_service_bound", {
    id_special_service_bound: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: "special_service", key: "id_special_service" }
    },
    cover_type: { type: DataTypes.ENUM("type1", "type2", "type3"), allowNull: false },
    cover_color: { type: DataTypes.ENUM("hard", "soft"), allowNull: false },
}, { tableName: "special_service_bound", timestamps: true });

export default SpecialServiceBound;
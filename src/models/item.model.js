import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Item = sequelize.define('item', {
    id_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: "product", key: "id_product" }
    },
    name: { type: DataTypes.STRING, allowNull: false },
    mount: { type: DataTypes.FLOAT, allowNull: false },
}, { tableName: 'item', timestamps: true });

export default Item;
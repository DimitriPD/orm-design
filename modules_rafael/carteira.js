import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const carteira = sequelize.define("carteira Rafael", 
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        total_recursos: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    },
    {
        tableName: "tb_carteira_rafael"
    }
)

export default carteira;
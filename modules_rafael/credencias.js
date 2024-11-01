import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const credencias = sequelize.define("credencias Rafael", 
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        senha_hash: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        microsoft_credencial: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        tableName: "tb_credencias_rafael"
    }
)

export default credencias;
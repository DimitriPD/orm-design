import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const estado = sequelize.define("Estado", 
    {
        cod_estado: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        sigla: {
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        nome_estado: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        tableName: "tb_estado"
    }
)

export default estado;
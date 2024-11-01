import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const tipos_usuario = sequelize.define("Tipos Usuario", 
    {
        cod_tipo_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        descricao_tipo_usuario: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        tableName: "tb_tipos_usuario"
    }
)

export default tipos_usuario;
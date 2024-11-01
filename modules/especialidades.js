import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const especialidades = sequelize.define("Especialidades", 
    {
        cod_especialidade: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        descricao_especialidade: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        tableName: "tb_especialidades"
    }
)

export default especialidades;
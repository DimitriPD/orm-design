import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const cidades = sequelize.define("Cidades", 
    {
        cod_cidade: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome_cidade: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        tableName: "tb_cidades"
    }
)

export default cidades;
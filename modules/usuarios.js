import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const usuarios = sequelize.define("Usuarios", 
    {
        cod_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome_usuario: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        senha_hash: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        tableName: "tb_usuarios"
    }
)

export default usuarios;
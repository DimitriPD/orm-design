import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

const usuario_rafael = sequelize.define("Usuario Rafael", 
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        matricula: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        foto_perfil_url: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        tableName: "tb_usuario_rafael"
    }
)

export default usuario_rafael;
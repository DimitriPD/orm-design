import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: "design",
    username: "root",
    password: "PUC@1234",
    host: "localhost",
    dialect: "mysql"
});
// 
export default sequelize;
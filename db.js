import { Sequelize } from "sequelize";
import sequelize from "./conn.js";

import cidades from "./modules/cidades.js";
import estados from "./modules/estados.js";
import especialidades from "./modules/especialidades.js";
import tipos_usuario from "./modules/tipos_usuario.js";
import usuarios from "./modules/usuarios.js";

estados.hasMany(cidades);
cidades.belongsTo(estados);
cidades.hasOne(usuarios);
tipos_usuario.hasOne(usuarios);

import carteira from "./modules_rafael/carteira.js";
import credencias from "./modules_rafael/credencias.js";
import usuario_rafael from "./modules_rafael/usuario.js";

usuario_rafael.hasOne(carteira);
usuario_rafael.hasOne(credencias);

sequelize.sync({force: true});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.cidades = cidades;
db.estados = estados;
db.especialidades = especialidades;
db.tipos_usuario = tipos_usuario;
db.usuarios = usuarios;
db.usuario_rafael = usuario_rafael;
db.carteira = carteira;
db.credencias = credencias;

export default db;
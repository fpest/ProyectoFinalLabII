"use strict";
const { Sequelize, Model, DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) =>{

class Personas extends Model {

/*
  static associate(models) {
      Categoria.hasMany(models.Lista, { foreignKey: "idCategoria" });
}
*/
}

  Personas.init(
    {
    idPersona: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    eMail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
    }},{

      sequelize,
      timestamp : true,
      createdAt: false,
      updatedAt: false,
      modelName: "Personas"});
return Personas;
};
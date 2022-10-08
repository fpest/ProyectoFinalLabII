"use strict";
const {Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) =>{

class Alumnos extends Model {

/*
  static associate(models) {
      Categoria.hasMany(models.Lista, { foreignKey: "idCategoria" });
}
*/
}

  Alumnos.init(
    {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idPersona: {
      type: DataTypes.INTEGER,
     },
    legajo: {
      type: DataTypes.STRING,
    }},{    
      sequelize,
      timestamp : true,
      createdAt: false,
      updatedAt: false,
      modelName: "Alumnos"});
return Alumnos;
};
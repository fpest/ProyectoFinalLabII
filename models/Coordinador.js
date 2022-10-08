"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) =>{

class Coordinador extends Model {

/*
  static associate(models) {
      Categoria.hasMany(models.Lista, { foreignKey: "idCategoria" });
}
*/
}

  Coordinador.init(
    {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
        },
    legajo: {
        type: DataTypes.STRING,
      }},{    
        sequelize,
        timestamp : true,
        createdAt: false,
        updatedAt: false,
      modelName: "Coordinador"});
return Coordinador;
};
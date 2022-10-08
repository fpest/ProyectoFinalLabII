"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) =>{

class Cursa extends Model {

/*
  static associate(models) {
      Categoria.hasMany(models.Lista, { foreignKey: "idCategoria" });
}
*/
}

  Cursa.init(
    {
    idAlumno: {
      type: DataTypes.INTEGER,
    },
    idMateria: {
        type: DataTypes.INTEGER,
    },
    validado: {
      type: DataTypes.INTEGER,
    }},{    
      sequelize,
      timestamp : true,
      createdAt: false,
      updatedAt: false,
      modelName: "Cursa"});
return Cursa;
};
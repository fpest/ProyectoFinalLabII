const bcrypt = require("bcrypt");
const express = require("express");
var mysql = require('mysql2');
var autenticado = require("../middleware/autenticar");
const Alumnos = require("../models").Alumnos;
const Personas = require("../models").Personas;
const Profesor = require("../models").Profesor;
const Coordinador = require("../models").Coordinador;



exports.logout = function (req, res) {
  console.log("en logout")
  req.session.mensaje = ""
  req.session.destroy();
  res.redirect('/');
}

exports.login = async function (req, res) {

  var validPassword
  
  const usuario = req.body.eMail
  const password = req.body.password


  console.log("Deberia aparecer aqui")

  console.log(usuario)
  console.log(password)
  console.log(usuario && password)

  if (!(usuario && password)) {
    req.session.mensaje = "Deben ingresarse Usuario y Password.";
    res.status(400).redirect("/");
  }

  


 const user = await Personas.findOne({ where: {eMail: usuario }});
  
  
 const esAlumno = await Alumnos.findOne({where: {idPersona : user.idPersona}})
 console.log("es alumno?");
 console.log(esAlumno);
  
  
  if (user) {

    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      req.session.user = user.eMail;
      req.session.usuarioCompleto = user;
      req.session.usuarioId = user.id;


     // req.session.usuarioPerfil = user.perfil;
     req.session.mensaje = "Todo Perfecto";
     res.render("./primera");
      //res.status(200).render("/");
    } else {
      req.session.mensaje = "Usuario o Password incorrecto.";
      res.status(400).redirect("/");
    }
    
  }else{
  req.session.mensaje = "Usuario o Password incorrecto.";
    res.status(400).redirect("/");
  }
  
 // res.render("./principal", { usuario: usuario, password: password });
};

 


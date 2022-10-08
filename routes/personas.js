var express = require("express");
var router = express.Router();
var personasController = require("../controllers/personas");


//router.get("/listar", usuariosController.listar);
router.post("/insertar", personasController.insertar);
router.post("/insertarRegistro", personasController.insertarRegistro);
router.get("/registrarse", personasController.registrarse);
//router.get(`/borrar/:id`, usuariosController.borrar);

module.exports = router;
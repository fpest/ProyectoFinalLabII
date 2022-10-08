const bcrypt = require("bcrypt");
const Profesor = require("../models").Profesor;
const Alumnos = require("../models").Alumnos;
const Personas = require("../models").Personas;



exports.insertar = async function (req, res) {
    
    var estado=""
    var perfil = ""

    const personas = await Personas.create({
      
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        user: req.body.user,
        pss:req.body.pss,
      })

     if (perfil=="Profesor"){
      await Profesor.create({
         id: personas.idPersona,
         legajo: "P" + personas.idPersona
      })}else{
        await Alumno.create({
        id: personas.idPersona,
        legajo: "A" + personas.idPersona
      })
    }}

    exports.registrarse =async function (req, res) {

  
      console.log("Registrarse")  
      res.render('./registrarse')
  }

  exports.insertarRegistro = async function (req, res) {
    var perfil = ""
    var passwordEncriptada
    var nuevaPersona
    const salt = await bcrypt.genSalt(10);
    passwordEncriptada = await bcrypt.hash(req.body.pss, salt);
    console.log(req.body.pss);
    console.log(passwordEncriptada);
    console.log(req.body.eMail)
    usuarioExistente = await Personas.findOne({ where: { eMail: req.body.eMail }});
   
    if (!usuarioExistente){
    nuevaPersona = await Personas.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      eMail: req.body.eMail,
      password:passwordEncriptada,
      habilitado:1})
      Alumnos.create({
      idPersona: nuevaPersona.idPersona,
      legajo: "A-" + nuevaPersona.idPersona})
      .catch((err) =>{ 
        var error = {error:"Usuario Existente"}
        console.log("Dentro del error: " + err)
     })
    }else{
      var error = {error:"Usuario Existente"}
      console.log("El else de Usuario Existente: ")
    }
    if (error) res.render('./registrarse', error);
    else  res.render('./index');
  }; 



    /*

    
exports.listar = async function (req, res) {
    var perfil = ""
    if (req.body.perfil=="admin")  perfil = "Admin"
    if (req.body.perfil=="usuario")  perfil = "Usuario"

  const usuarios =  await Usuario.findAll();
  const titulos = usuarios.map((usuario) => {
          return {id:usuario.id , nombre:usuario.nombre, user: usuario.user, pss: usuario.pss, perfil:usuario.perfil};
          })
          console.log(titulos)
    res.render("./insertarUsuario", {titulos: titulos});
};

exports.agregar =async function (req, res) {
  const lista = await Lista.create({
    nombre: req.body.nombre,
    user: req.body.user,
    pss:req.body.pss
   })
    .then((result) => {
      Lista.findAll().then((lista) => {
        res.redirect('/');
       });
    })
    .catch((err) => res.json(err));
};

exports.borrar =async function (req, res) {
    console.log(req.params.id)
    Usuario.destroy({
      where: { id: req.params.id },
    })
      .then(() => {
        res.redirect('../../usuarios/listar');
      
  })};

 
  */ 
 
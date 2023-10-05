import {
    getOne,
    getAll,
    deleteOne,
    postAll,
    putOne,
  } from "../storage/methods.js";
  
  const attributes = {
    nombreUsuario: "string",
    apellidoUsuario: "string",
    direccionUsuario: "string",
    telefonoUsuario: "string",
    emailUsuario: "string",
  };
  
  const endPoint = "/usuarios/";
  
  // ********** LLAMADO A LOS METODOS **********
  
  let obj = {
    nombreUsuario: "Jershon",
    apellidoUsuario: "Espitia",
    direccionUsuario: "calle 14",
    telefonoUsuario: "0987654321",
    emailUsuario: "correo@gmail.com",
    id: 1
  };
  
  // console.log(await getOne({endPoint, id: 3}));
  
  // console.log(await getAll({endPoint}));
  
  // console.log(await deleteOne({endPoint, id: 1}));
  
//   console.log(await postAll({endPoint, attributes, obj}));
  
//   console.log(await putOne({endPoint, attributes, obj}));
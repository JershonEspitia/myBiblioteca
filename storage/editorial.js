import {
    getOne,
    getAll,
    deleteOne,
    postAll,
    putOne,
  } from "../storage/methods.js";
  
  const attributes = {
    nombreEditorial: "string",
    direccionEditorial: "string",
    telefonoEditorial: "string"
  };
  
  const endPoint = "/editorials/";
  
  // ********** LLAMADO A LOS METODOS **********
  
  let obj = {
    nombreEditorial: "Editorial pepito perez",
    direccionEditorial: "Calle 12",
    telefonoEditorial: "123456",
    id: 1
  };
  
  // console.log(await getOne({endPoint, id: 3}));
  
  // console.log(await getAll({endPoint}));
  
  // console.log(await deleteOne({endPoint, id: 1}));
  
//   console.log(await postAll({endPoint, attributes, obj}));
  
//   console.log(await putOne({endPoint, attributes, obj}));
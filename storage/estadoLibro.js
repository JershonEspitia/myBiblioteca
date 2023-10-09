import {
    getOne,
    getAll,
    deleteOne,
    postAll,
    putOne,
  } from "../storage/methods.js";
  
  export const attributes = {
    nombreEstado: "string",
    descripcionEstado: "string",
  };
  
  export const endPoint = "/estados/";
  
  // ********** LLAMADO A LOS METODOS **********
  
  let obj = {
    nombreEstado: "Prestado",
    descripcionEstado: "Se encuentra en prestamo hasta manana",
    id: 1
  };
  
  // console.log(await getOne({endPoint, id: 3}));
  
  // console.log(await getAll({endPoint}));
  
  // console.log(await deleteOne({endPoint, id: 1}));
  
//   console.log(await postAll({endPoint, attributes, obj}));
  
//   console.log(await putOne({endPoint, attributes, obj}));
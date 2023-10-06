import {
    getOne,
    getAll,
    deleteOne,
    postAll,
    putOne,
  } from "../storage/methods.js";
  
  const attributes = {
    nombreAutor: "string",
    apellidoAutor: "string",
    nacionalidadAutor: "string"
  };
  
  const endPoint = "/autors/";
  
  // ********** LLAMADO A LOS METODOS **********
  
  let obj = {
    nombreAutor: "Marlene",
    apellidoAutor: "Rey",
    nacionalidadAutor: "Frances", 
    id: 1
  };
  
  // console.log(await getOne({endPoint, id: 3}));
  
  // console.log(await getAll({endPoint}));
  
  // console.log(await deleteOne({endPoint, id: 1}));
  
  // console.log(await postAll({endPoint, attributes, obj}));
  
//   console.log(await putOne({endPoint, attributes, obj}));
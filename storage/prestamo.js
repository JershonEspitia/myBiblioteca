import {
    getOne,
    getAll,
    deleteOne,
    postAll,
    putOne,
  } from "../storage/methods.js";
  
  const attributes = {
    usuarioId: "number",
    libroId: "number",
    fechaPrestamo: "date",
    fechaDevolucion: "date",
    estado: "string",
  };
  
  const endPoint = "/prestamo/";
  
  // ********** LLAMADO A LOS METODOS **********
  
  let obj = {
    usuarioId: 1,
    libroId: 1,
    fechaPrestamo: "2023-10-15",
    fechaDevolucion: "2023-10-20",
    estado: "string",
    id: 1
  };
  
  // console.log(await getOne({endPoint, id: 3}));
  
  // console.log(await getAll({endPoint}));
  
  // console.log(await deleteOne({endPoint, id: 1}));
  
//   console.log(await postAll({endPoint, attributes, obj}));
  
  // console.log(await putOne({endPoint, attributes, obj}));
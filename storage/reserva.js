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
    fechaReserva: "date",
    fechaReservaFin: "date",
    estado: "string",
  };
  
  const endPoint = "/reservas/";
  
  // ********** LLAMADO A LOS METODOS **********
  
  let obj = {
    usuarioId: 2,
    libroId: 1,
    fechaReserva: "2023-08-11",
    fechaReservaFin: "2023-10-15",
    estado: "Reservado hasta x fecha",
    id: 1
  };
  
  // console.log(await getOne({endPoint, id: 3}));
  
  // console.log(await getAll({endPoint}));
  
  // console.log(await deleteOne({endPoint, id: 1}));
  
//   console.log(await postAll({endPoint, attributes, obj}));
  
//   console.log(await putOne({endPoint, attributes, obj}));
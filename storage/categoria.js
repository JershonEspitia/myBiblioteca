import {
  getOne,
  getAll,
  deleteOne,
  postAll,
  putOne,
} from "../storage/methods.js";

const attributes = {
  nombreCategoria: "string",
};

const endPoint = "/categorias/";

// ********** LLAMADO A LOS METODOS **********

let obj = {
  nombreCategoria: "Comedia",
  id: 1
};

// console.log(await getOne({endPoint, id: 3}));

// console.log(await getAll({endPoint}));

// console.log(await deleteOne({endPoint, id: 1}));

// console.log(await postAll({endPoint, attributes, obj}));

// console.log(await putOne({endPoint, attributes, obj}));
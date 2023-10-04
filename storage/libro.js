import {
  getOne,
  getAll,
  deleteOne,
  postAll,
  putOne,
} from "../storage/methods.js";

const attributes = {
  autorId: "number",
  categoriaId: "number",
  editorialId: "number",
  titulo: "string",
  fechaLanzamiento: "date",
  isbn: "string",
  numPaginacion: "number",
  estadoId: "number",
};

const endPoint = "/libro/";

// ********** LLAMADO A LOS METODOS **********

let obj = {
  autorId: 2,
  categoriaId: 1,
  editorialId: 1,
  titulo: "Titulitoooo",
  fechaLanzamiento: "2023-10-05",
  isbn: "isbn 20",
  id: 1
};

// console.log(await getOne({endPoint, id: 2}));

// console.log(await getAll({endPoint}));

// console.log(await deleteOne({endPoint, id: 1}));

// console.log(
//   await postAll({endPoint, attributes, obj})
// );

console.log(
  await putOne({endPoint, attributes, obj})
);
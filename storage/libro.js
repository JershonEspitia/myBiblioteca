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

const endPoint = "/libros/";

// ********** LLAMADO A LOS METODOS **********

let obj = {
  autorId: 10,
  categoriaId: 1,
  editorialId: 1,
  titulo: "Titulo 2",
  fechaLanzamiento: "2023-12-12",
  isbn: "isbn 2",
  numPaginacion: 100,
  estadoId: 1,
  id: 1
};


// console.log("LOG getOne LIBRO: ",await getOne({endPoint, id: 2}));

// console.log("LOG getAll LIBRO: ",await getAll({endPoint}));

// console.log("LOG deleteOne LIBRO: ",await deleteOne({endPoint, id: 1}));

console.log("LOG postAll LIBRO: ",await postAll({endPoint, attributes, obj}));

// console.log("LOG putOne LIBRO: ", await putOne({endPoint, attributes, obj}));
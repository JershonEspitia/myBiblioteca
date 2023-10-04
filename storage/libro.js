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

// LLAMADO A LOS METODOS

// console.log(await getOne(endPoint, 2));

// console.log(await getAll(endPoint));

// console.log(await deleteOne(endPoint, 1));

// console.log(
//   await postAll(endPoint, attributes, {
//     autorId: 1,
//     categoriaId: 1,
//     editorialId: 1,
//     titulo: "Titulo libro",
//     fechaLanzamiento: "2023-05-05",
//     isbn: "isbn 1",
//     numPaginacion: 1,
//     estadoId: 1,
//     nombre: "jershon",
//     camina: 123
//   })
// );

const  obj = {
  id: 1
}

console.log(
  await putOne({endPoint, attributes, obj})
);
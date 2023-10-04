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
  id: "number"
};

const endPoint = "/libro/";

// LLAMADO A LOS METODOS

// console.log(await getOne(endPoint, 2));

// console.log(await getAll(endPoint));

// console.log(await deleteOne(endPoint, 1));

console.log(
  await postAll(endPoint, attributes, {
    autorId: 1,
    categoriaId: 1,
    editorialId: 1,
    titulo: "Titulo libro",
    fechaLanzamiento: "2023-05-05",
    isbn: "isbn 1",
    numPaginacion: 1,
    estadoId: 1,
    nombre: "jershon",
    camida: 123
  })
);

// console.log(
//   await putOne(endPoint, {
//     autorId: 110,
//     categoriaId: 11,
//     editorialId: 1,
//     titulo: "Mi libro 3",
//     fechaLanzamiento: "2023-04-02",
//     isbn: "isbn1",
//     numPaginacion: 120,
//     estadoId: 1,
//     id: 1,
//   })
// );
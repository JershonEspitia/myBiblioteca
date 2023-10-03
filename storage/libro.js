import { env } from "../config.js";
import { validationLibro } from "../storage/validations.js";

const uri = `${env.ssl + env.hostName}:${env.port}`;
const endPoint = "/libro/"
const config = {
  method: undefined,
  headers: { "Content-Type": "application/json" },
  body: undefined
};

export const getAll = async () => {
  config.method = "GET";
  let res = await (await fetch(`${uri}${endPoint}`, config)).json();
  return res;
};

export const postAll = async (obj) => {

  const value = validationLibro(obj, "POST");
  console.log("value",value);

  if (value == true) {
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}${endPoint}`, config)).json();
    return res;
  } else {
    return "No se pudo realizar el POST";
  }
};

export const deleteOne = async (id) => {
  if (typeof id !== "number")
    return { status: 400, message: `El dato ${id} no cumple con el formato` };
  config.method = "DELETE";
  let res = await (await fetch(`${uri}${endPoint}${id}`, config)).json();
  return res;
};

export const putOne = async (obj = {id: -999, autorId: -999, categoriaId: -999, editorialId: -999, titulo: -999, fechaLanzamiento: -999, isbn: -999, numPaginacion: -999, estadoId: -999}) => {

  const value = validationLibro(obj);
  console.log("value",value);
  
  if (value === true) {
    config.method = "PUT";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}${endPoint}${obj.id}`, config)).json();
    return res;
  } else {
    return "No se pudo realizar el PUT";
  }
};

// LLAMADO A LOS METODOS
// console.log(await getAll());
// console.log(await postAll({autorId: 1, categoriaId: 1, editorialId: 1, titulo: "Mi libro", fechaLanzamiento: "2023-04-02", isbn: "isbn1", numPaginacion: 120, estadoId: 1}));
// console.log(await deleteOne(1));
// console.log(await putOne({id: 1, autorId: 11, categoriaId: 11, editorialId: 1, titulo: "Mi libro 3", fechaLanzamiento: "2023-04-02", isbn: "isbn1", numPaginacion: 120, estadoId: 1}));
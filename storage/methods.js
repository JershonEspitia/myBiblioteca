import { env } from "../config.js";
import { validationObject } from "../storage/validations.js";

const uri = `${env.ssl + env.hostName}:${env.port}`;

const config = {
  method: undefined,
  headers: { "Content-Type": "application/json" },
  body: undefined,
};

const methods = {
    get: "GET",
    del: "DELETE",
    post: "POST",
    put: "PUT",
};

export const getOne = async (endPoint, id) => {
  config.method = methods.get;
  let res = await (await fetch(`${uri}${endPoint}${id}`, config)).json();
  return res;
};

export const getAll = async (endPoint) => {
  config.method = methods.get;
  let res = await (await fetch(`${uri}${endPoint}`, config)).json();
  return res;
};

export const deleteOne = async (endPoint, id) => {
  if (typeof id !== "number")
    return { status: 400, message: `El dato ${id} no cumple con el formato` };
  config.method = methods.del;
  let res = await (await fetch(`${uri}${endPoint}${id}`, config)).json();
  return res;
};

export const postAll = async (endPoint, attributes, obj) => {
    
  const value = validationObject(attributes, obj, methods.post);
  console.log(value[0]);
  console.log(value[1]);

  if (value[0] == true) {
    config.method = methods.post;
    config.body = JSON.stringify(value[1]);
    let res = await (await fetch(`${uri}${endPoint}`, config)).json();
    console.log("Registro exitoso.");
    return res;
  } else {
    return "No se pudo realizar el POST";
  }
};

export const putOne = async (endPoint,
  obj = {
    id: -999,
    autorId: -999,
    categoriaId: -999,
    editorialId: -999,
    titulo: -999,
    fechaLanzamiento: -999,
    isbn: -999,
    numPaginacion: -999,
    estadoId: -999,
  }
) => {
  const value = validationLibro(obj);
  console.log(value);

  if (value === true) {
    config.method = methods.put;
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}${endPoint}${obj.id}`, config)).json();
    return res;
  } else {
    return "No se pudo realizar el PUT";
  }
};

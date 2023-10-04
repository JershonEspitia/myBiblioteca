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
  const value = validationObject(attributes, obj);

  if (value) {
    config.method = methods.post;
    config.body = JSON.stringify(value);
    let res = await (await fetch(`${uri}${endPoint}`, config)).json();
    console.log("Registro exitoso.");
    return res;
  } else {
    return "No se pudo realizar el POST";
  }
};

export const putOne = async ({endPoint, attributes, obj}) => {

  console.log(obj.id)
  if(!obj.id) return { status: 400, message: `Debe ingresar el id.`};

  const value = validationObject(attributes, obj);
  console.log(value);

  if (value) {
    config.method = methods.put;
    config.body = JSON.stringify(value);
    let res = await (await fetch(`${uri}${endPoint}${obj.id}`, config)).json();
    return res;
  } else {
    return "No se pudo realizar el PUT";
  }
};

import { env } from "../config.js";
import { validationCategoria } from "../storage/validations.js";

const uri = `${env.ssl + env.hostName}:${env.port}`;
const endPoint = "/categoria/"
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

export const deleteOne = async (id) => {
  if (typeof id !== "number")
    return { status: 400, message: `El dato ${id} no cumple con el formato` };
  config.method = "DELETE";
  let res = await (await fetch(`${uri}${endPoint}${id}`, config)).json();
  return res;
};

export const postAll = async (obj) => {

  const value = validationCategoria(obj, "POST");
  console.log(value);

  if (value == true) {
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}${endPoint}`, config)).json();
    return res;
  } else {
    return "No se pudo realizar el POST";
  }
};

export const putOne = async (obj = {id: -999, name: -999}) => {

  const value = validationCategoria(obj);
  console.log(value);
  
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
// console.log(await postAll({name: 1}));
// console.log(await deleteOne(1));
// console.log(await putOne({id: 1, name: "Comedy"}));
import url  from "../config.js";
import { validationObject } from "../storage/validations.js";


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

export const getOne = async ({endPoint, id}) => {
  if(!endPoint) return { status: 400, message: `Por favor ingrese el endPoint` };
  if(!id) return { status: 400, message: `Por favor ingrese el id` };
  config.method = methods.get;
  let res = await (await fetch(`${url}${endPoint}${id}`, config)).json();
  return res;
};

export const getAll = async ({endPoint}) => {
  if(!endPoint) return { status: 400, message: `Por favor ingrese el endPoint` };
  config.method = methods.get;
  let res = await (await fetch(`${url}${endPoint}`, config)).json();
  return res;
};

export const deleteOne = async ({endPoint, id}) => {
  if(!endPoint) return { status: 400, message: `Por favor ingrese el endPoint` };
  if(!id) return { status: 400, message: `Por favor ingrese el id` };
  if (typeof id !== "number")
    return { status: 400, message: `El dato ${id} no cumple con el formato` };
  config.method = methods.del;
  let res = await (await fetch(`${url}${endPoint}${id}`, config)).json();
  return res;
};

export const postAll = async ({endPoint, attributes, obj}) => {
  if(!endPoint) return { status: 400, message: `Por favor ingrese el endPoint` };
  if(!attributes) return { status: 400, message: `Por favor ingrese los atributos` };

  const value = validationObject({attributes, obj});
  console.log(value);

  if (value[1] === true) {
    config.method = methods.post;
    config.body = JSON.stringify(value[0]);
    let res = await (await fetch(`${url}${endPoint}`, config)).json();
    console.log("Registro exitoso.");
    return res;
  } else {
    return "No se pudo realizar el POST";
  }
};

export const putOne = async ({endPoint, attributes, obj}) => {
  if(!endPoint) return { status: 400, message: `Por favor ingrese el endPoint` };
  if(!attributes) return { status: 400, message: `Por favor ingrese los atributos` };
  if(!obj.id) return { status: 400, message: `El libro NO tiene id` };

  const value = validationObject({attributes, obj, method: methods.put});
  console.log(value);

  if (value[1] === true) {
    let resAct = await (await fetch(`${url}${endPoint}${obj.id}`)).json(); 
    console.log("resAct", resAct);

    // let newData = {...resAct, ...value[0]}
    // obj = {...all, ...objUpdate};

    config.method = methods.put;
    config.body = JSON.stringify(value[0]);
    let res = await (await fetch(`${url}${endPoint}${obj.id}`, config)).json();
    return res;
  } else {
    return "No se pudo realizar el PUT";
  }
};

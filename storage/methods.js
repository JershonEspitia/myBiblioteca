import url  from "../config.js";
import { validationObject, validarId } from "../storage/validations.js";


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

  const body = validationObject({attributes, obj});
  console.log(body);
  if(body.status) return body.message

  let isOk = await validarId({body, url});
  if(isOk.status) { console.log(isOk.message) }

  if (body.isOk && isOk === true) {
    config.method = methods.post;
    config.body = JSON.stringify(body);
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
  if(!obj.id) return { status: 400, message: `Por favor ingrese el id` };

  const body = validationObject({attributes, obj, method: methods.put});
  if(body.status) { console.log(body) }

  let isOk = await validarId({body, url});
  if(isOk.status) { console.log(isOk.message) }

  if (isOk === true) {
    let resAct = await (await fetch(`${url}${endPoint}${obj.id}`)).json(); 

    let newData = {...resAct, ...body}

    config.method = methods.put;
    config.body = JSON.stringify(newData);
    let res = await (await fetch(`${url}${endPoint}${obj.id}`, config)).json();
    return res;
  } else {
    return "No se pudo realizar el PUT";
  }
};

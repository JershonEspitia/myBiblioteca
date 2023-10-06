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
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  if(!id || id.includes(" ")) return { status: 400, message: `Por favor ingrese el id o un id valido. valor: "${id}" ` };
  config.method = methods.get;
  let res = await (await fetch(`${url}${endPoint}${id}`, config)).json();
  console.log("RESSS: ",res);
  return res;
};

export const getAll = async ({endPoint}) => {
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  config.method = methods.get;
  let res = await (await fetch(`${url}${endPoint}`, config)).json();
  return res;
};

export const getRelations = async ({endPoint}) => { 
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  
  const arrayIds = ["autorId", "categoriaId", "editorialId", "estadoId", "usuarioId", "libroId"];
  
  config.method = methods.get;
  let resOne = await (await fetch(`${url}${endPoint}`, config)).json();

  let newUrl = url + "/" + endPoint.split("/")[1];

  for(const key in resOne[0]) { 
    if(arrayIds.includes(key)) {
      if(newUrl.includes("?")){
        newUrl += `&_expand=${key.split("I")[0]}`;
      } else {
        newUrl += `?_expand=${key.split("I")[0]}`;
      };
    };
  };

  config.method = methods.get;
  let res = await (await fetch(`${newUrl}`, config)).json();
  return res;
};

export const deleteOne = async ({endPoint, id}) => {
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  if(!id || id.includes(" ")) return { status: 400, message: `Por favor ingrese el id o un id valido. valor: "${id}" ` };
  
  if (typeof id !== "number")
    return { status: 400, message: `El dato ${id} no cumple con el formato` };
  config.method = methods.del;
  let res = await (await fetch(`${url}${endPoint}${id}`, config)).json();
  return res;
};

export const postAll = async ({endPoint, attributes, obj}) => {
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  console.log("attributes", attributes)
  
  if(!attributes || Object.keys(attributes).length === 0) return { status: 400, message: `Por favor ingrese los atributos. valor: "${attributes}" ` };

  const body = validationObject({attributes, obj});
  if(body.status) return body

  let isOk = await validarId({body, url});
  if(isOk.status) { return isOk.message }

  if (isOk === true) {
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
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  console.log("attributes", attributes)
  if(!attributes || Object.keys(attributes).length === 0) return { status: 400, message: `Por favor ingrese los atributos. valor: "${attributes}" ` };
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
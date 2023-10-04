export const validationObject = (attributes, obj={}, method)=>{

    if(obj.constructor.name !== "Object" || Object.keys(obj).length === 0) return { status: 400, message: `Por favor ingrese los datos`};

    let body = {};
    let returnValue = false;

    for(const key in attributes) {

        if(key === "id" && method === "POST") {
            returnValue = true;
            return [returnValue, body];
        } else if(!(key in obj)) return { status: 400, message: `Por favor ingrese ${key}.` };

        if (attributes[key] === "date") {
            let date = new Date(obj[key]);
            if (!(date && date.getFullYear() <= 2040)) return { status: 400, message: `El dato (fechaLanzamiento) ${fechaLanzamiento} no cumple con el formato`};
            
            body[key] = date.toISOString().split("T")[0];
        } else {
            if(typeof(obj[key]) !== attributes[key]) return { status: 400, message: `El dato ${key} no cumple con el formato`};
            body[key] = obj[key];
        }
    };
};

export const validationCategoria = (obj, method)=>{

    const {id, name} = obj;

    if (method !== "POST") {
        if (!id) return { status: 400, message: `Por favor ingrese el id.`};
        if (typeof id !== "number") return { status: 400, message: `El dato (id) ${id} no cumple con el formato`};
    }
        
    if (!name) return { status: 400, message: `Por favor ingrese el nombre de la categoria.`}
    if (typeof name !== "string") return { status: 400, message: `El dato (nombre) ${name} no cumple con el formato`};

    return true;
};
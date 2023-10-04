export const validationObject = (attributes, obj={})=>{

    if(obj.constructor.name !== "Object" || Object.keys(obj).length === 0) return { status: 400, message: `Por favor ingrese los datos`};

    let body = {};

    for(const key in attributes) {

        if(!(key in obj)) return { status: 400, message: `Por favor ingrese ${key}.` };

        if (attributes[key] === "date") {
            let date = new Date(obj[key]);
            if (!(date && date.getFullYear() <= 2040)) return { status: 400, message: `El dato (fechaLanzamiento) ${fechaLanzamiento} no cumple con el formato`};
            
            body[key] = date.toISOString().split("T")[0];
        } else {
            if(typeof(obj[key]) !== attributes[key]) return { status: 400, message: `El dato ${key} no cumple con el formato`};
            body[key] = obj[key];
        }
    };

    return body;
};
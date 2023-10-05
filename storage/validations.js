export const validationObject = ({attributes, obj={}, method = "POST"})=>{
    if(obj.constructor.name !== "Object" || Object.keys(obj).length === 0) return { status: 400, message: `Por favor ingrese los datos`};
    
    let body = {};
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if(method === "PUT"){
        for(const key in obj) {
            if (key in attributes) {
                if (datePattern.test(obj[key])) {
                    let date = new Date(obj[key]);
                    if (!(date instanceof Date && !isNaN(date) && date.getFullYear() <= 2040)) return { status: 400, message: `El dato (fechaLanzamiento) ${obj[key]} no cumple con el formato`};
                    body[key] = date.toISOString().split("T")[0];
                } else {
                    if(typeof(obj[key]) !== attributes[key]) return { status: 400, message: `El dato ${key} no cumple con el formato`};
                    body[key] = obj[key];
                }
            }
        }
    } else {
        for(const key in attributes) {
        
            if(!(key in obj)) return { status: 400, message: `Por favor ingrese ${key}.` };
    
            if (attributes[key] === "date") {
                let date = new Date(obj[key]);
                if (!(date && date.getFullYear() <= 2040)) return { status: 400, message: `El dato (fechaLanzamiento) ${obj[key]} no cumple con el formato`};
                
                body[key] = date.toISOString().split("T")[0];
            } else {
                if(typeof(obj[key]) !== attributes[key]) return { status: 400, message: `El dato ${key} no cumple con el formato`};
                body[key] = obj[key];
            }
        };
    }
    
    return body;
};

export const validarId = async ({body, url}) => {
    const arrayIds = ["autorId", "categoriaId", "editorialId", "estadoId", "usuarioId", "libroId"];
    for(const key in body){
        if(arrayIds.includes(key)){
            let res = await fetch(`${url}/${key.split("I")[0] + "s"}/${body[key]}`);
            if(!res.ok) return { status: 400, message: `El id de ${key} NO existe.`}
        };
    };
    return true;
};
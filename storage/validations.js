export const validationLibro = (obj, method)=>{

    const {id, autorId, categoriaId, editorialId, titulo, fechaLanzamiento, isbn, numPaginacion, estadoId} = obj;
    
    let date = new Date(fechaLanzamiento);
  
    if (!fechaLanzamiento) return { status: 400, message: `Por favor ingrese una fecha.`}
    if (!(date && date.getFullYear() <= 2040)) return { status: 400, message: `El dato (fechaLanzamiento) ${fechaLanzamiento} no cumple con el formato`};
  
    if (method !== "POST") {
        if (!id) return { status: 400, message: `Por favor ingrese el id.`};
        if (typeof id !== "number") return { status: 400, message: `El dato (id) ${id} no cumple con el formato`};
    }
        
    if (!autorId) return { status: 400, message: `Por favor ingrese el id del autor.`}
    if (typeof autorId !== "number") return { status: 400, message: `El dato (autorId) ${autorId} no cumple con el formato`};
    
    if (!categoriaId) return { status: 400, message: `Por favor ingrese el id de la categoria.`}
    if (typeof categoriaId !== "number") return { status: 400, message: `El dato (categoriaId) ${categoriaId} no cumple con el formato`};
  
    if (!editorialId) return { status: 400, message: `Por favor ingrese el id de la editorial.`}
    if (typeof editorialId !== "number") return { status: 400, message: `El dato (editorialId) ${editorialId} no cumple con el formato`};
  
    if (!titulo) return { status: 400, message: `Por favor ingrese un titulo.`}
    if (typeof titulo !== "string") return { status: 400, message: `El dato (titulo) ${titulo} no cumple con el formato`};
  
    if (!isbn) return { status: 400, message: `Por favor ingrese el isbn.`}
    if (typeof isbn !== "string") return { status: 400, message: `El dato (isbn) ${isbn} no cumple con el formato`};
  
    if (!numPaginacion) return { status: 400, message: `Por favor ingrese el numero de paginacion.`}
    if (typeof numPaginacion !== "number") return { status: 400, message: `El dato (numPaginacion) ${numPaginacion} no cumple con el formato`};
  
    if (!estadoId) return { status: 400, message: `Por favor ingrese el estado del id.`}
    if (typeof estadoId !== "number") return { status: 400, message: `El dato (estadoId) ${estadoId} no cumple con el formato`};

    return true;
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
//GET

const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json())
}

//DELETE
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE",
    })

}

//PUT
const actualizarProducto = (imagen , categoria, nombreProducto, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imagen , categoria, nombreProducto, precio, descripcion})
    }).then(respuesta => respuesta).catch((err) => console.log(err));
}

//POST
const crearProducto = (imagen , categoria, nombreProducto, precio, descripcion) => {
    //El fetch por defecto trabajo con el metodo GET, por eso lo definimos aqui nosotros
    console.log(imagen , categoria, nombreProducto, precio, descripcion)
    return fetch("http://localhost:3000/producto",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imagen , categoria, nombreProducto, precio, descripcion}) //HTTP trabaja con texto
    })
}

const crearMensaje = (nombre, mensaje) => {
    return fetch("http://localhost:3000/mensajes",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, mensaje})
    })
}


export const serviciosProducto = {
    listaProductos,
    eliminarProducto,
    actualizarProducto,
    crearProducto,
    detalleProducto
}

export const serviciosFormularioPie = {
    crearMensaje
}
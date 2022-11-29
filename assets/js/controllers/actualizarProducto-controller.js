import { serviciosProducto } from "../services/productos-servicios.js";

const formulario = document.querySelector("[data-formulario]");

//Funcion asincrona, sustituye al then de la promesa
const obtenerInformacion = async () =>{
    const url = new URL(window.location);
    const id =  url.searchParams.get("id"); //esto es el Param que le pusimos en la url ?id=xxxxxxx

    if( id === null){
        alert("Producto no encontrado")
    }

    const imagenUrl = document.querySelector("[data-imagen]")
    const categoria = document.querySelector("[data-categoria]")
    const nombreProducto = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    

    try{
        const producto = await serviciosProducto.detalleProducto(id);
        console.log(producto);
        
        if(producto.imagen && producto.categoria && producto.nombreProducto && producto.precio && producto.descripcion){
            imagenUrl.value = producto.imagen;
            categoria.value = producto.categoria;
            nombreProducto.value = producto.nombreProducto;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        } else {
            throw new Error();
        }

    } catch (error){
       
    }
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id =  url.searchParams.get("id");
    const imagenUrl = document.querySelector("[data-imagen]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombreProducto = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    
    serviciosProducto.actualizarProducto(imagenUrl, categoria, nombreProducto, precio, descripcion, id).then(() => {
       window.location.href="productos.html"
    }).catch((err) => alert(err));
})
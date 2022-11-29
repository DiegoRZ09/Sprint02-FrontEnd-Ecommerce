import { serviciosProducto } from "../services/productos-servicios.js";
import { campos } from "../formularios/validaciones.js";

const formulario = document.querySelector("[data-formulario]");


formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    
    
    if( campos.imagen && 
        campos.categoria &&
        campos.nombreProducto &&
        campos.precio &&
        campos.descripcion ){

        const imagenUrl = document.querySelector("[data-imagen]").value;
        const categoria = document.querySelector("[data-categoria]").value;
        const nombreProducto = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
            
        
        serviciosProducto.crearProducto (imagenUrl , categoria, nombreProducto, precio, descripcion).then(() =>{
            document.querySelector(".formulario__mensaje").classList.remove("formulario__mensaje-activo");
            
            document.querySelector(".formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
    
            setTimeout(()=>{
                document.querySelector(".formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
            }, 4000);
    
            document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) =>{
                icono.classList.remove("formulario__grupo-correcto");
            });
        }).catch((err) => alert(err));



    } else {
        document.querySelector(".formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});

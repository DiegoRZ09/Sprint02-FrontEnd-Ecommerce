import { serviciosFormularioPie } from "../services/productos-servicios.js";
import { campos } from "../formularios/validaciones.js";

const formulario = document.querySelector("[data-pie]");


formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    
    
    if( campos.nombre && 
        campos.mensaje){

        const nombreCliente = document.querySelector("[data-nombreCliente]").value;
        const mensajeCliente = document.querySelector("[data-mensaje]").value;
        
            
        
        serviciosFormularioPie.crearMensaje(nombreCliente,mensajeCliente).then(() =>{
           
                document.querySelector(".formulario__mensaje-pie").classList.remove("formulario__mensaje-activo");
                document.querySelector(".formulario__mensaje-exito-pie").classList.add("formulario__mensaje-exito-activo");
                formulario.reset();
                setTimeout(()=>{
                    document.querySelector(".formulario__mensaje-exito-pie").classList.remove("formulario__mensaje-exito-activo");
                }, 4000);
        
                document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) =>{
                    icono.classList.remove("formulario__grupo-correcto");
                });
        
            
        }).catch((err) => alert(err));



    } else {
        document.querySelector(".formulario__mensaje-pie").classList.add("formulario__mensaje-activo");
    }
});
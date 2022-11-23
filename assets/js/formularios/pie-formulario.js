import { validarFormulario } from "./validaciones.js";
import { campos } from "./validaciones.js";

const formulario = document.querySelector(".pie__formulario");

const inputs = document.querySelectorAll(".pie__formulario__campo__input");

inputs.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if(campos.nombre && campos.mensaje){
        document.querySelector(".formulario__mensaje-pie").classList.remove("formulario__mensaje-activo");
        formulario.reset();
        document.querySelector(".formulario__mensaje-exito-pie").classList.add("formulario__mensaje-exito-activo");

        setTimeout(()=>{
            document.querySelector(".formulario__mensaje-exito-pie").classList.remove("formulario__mensaje-exito-activo");
        }, 4000);

        document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) =>{
            icono.classList.remove("formulario__grupo-correcto");
        });

    } else {
        document.querySelector(".formulario__mensaje-pie").classList.add("formulario__mensaje-activo");
    }
});
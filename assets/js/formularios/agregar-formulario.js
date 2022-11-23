import { validarFormulario } from "./validaciones.js";
import { campos } from "./validaciones.js";

const form = document.querySelector(".formulario");
const entradas = document.querySelectorAll(".formulario__campo__input");

entradas.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

const imagen = document.getElementById("imagen");
const categoria = document.getElementById("categoria");
const nombreProducto = document.getElementById("nombreProducto");
// const imagen = document.getElementById("imagen");
// const imagen = document.getElementById("imagen");

// console.log(imagen.value)


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if( campos.imagen && 
        campos.categoria &&
        campos.nombreProducto &&
        campos.precio &&
        campos.descripcion ){
        
        document.querySelector(".formulario__mensaje").classList.remove("formulario__mensaje-activo");
        form.reset();
        document.querySelector(".formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");

        setTimeout(()=>{
            document.querySelector(".formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
        }, 4000);

        document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) =>{
            icono.classList.remove("formulario__grupo-correcto");
        });

        
    } else {
        document.querySelector(".formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});




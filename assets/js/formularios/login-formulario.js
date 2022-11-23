import { validarFormulario } from "./validaciones.js";
import { campos } from "./validaciones.js";

const form = document.querySelector(".formulario");

const entradas = document.querySelectorAll(".formulario__campo__input");

const correo = document.getElementById("correo");
const password = document.getElementById("password");

entradas.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(campos.correo  && campos.password){
        document.querySelector(".formulario__mensaje").classList.remove("formulario__mensaje-activo");
        
        if (correo.value == "user@correo.com" && password.value == "12345678"){
            window.location.href = "productos.html";
        } else{
            document.querySelector(".formulario__mensaje2").classList.add("formulario__mensaje-activo");
        }
        
    } else {
        document.querySelector(".formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});
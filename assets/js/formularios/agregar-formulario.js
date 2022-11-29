import { validarFormulario } from "./validaciones.js";

const entradas = document.querySelectorAll(".formulario__campo__input");

entradas.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});







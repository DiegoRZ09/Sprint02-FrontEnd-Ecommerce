import { validarFormulario } from "./validaciones.js";


const formulario = document.querySelector(".pie__formulario");

const inputs = document.querySelectorAll(".pie__formulario__campo__input");

inputs.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    
});
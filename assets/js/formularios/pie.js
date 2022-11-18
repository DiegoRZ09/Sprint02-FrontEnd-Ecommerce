const formulario = document.querySelector(".pie__formulario");
const inputs = document.querySelectorAll(".pie__formulario__campo__input");

const expresiones = {
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mensaje: /^[\w\W\s]{1,120}$/
}

const campos = {
    nombre: false,
    mensaje: false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.name)
        break;

        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, e.target.name)
        break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-xmark");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-check");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;

    } else{
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-check");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-xmark");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;
    }
}

inputs.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if(campos.nombre && campos.mensaje){
        document.querySelector(".formulario__mensaje").classList.remove("formulario__mensaje-activo");
        formulario.reset();
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
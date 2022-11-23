const expresiones = {
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mensaje: /^[\w\W\s]{1,120}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    imagen: /^[\w\W]+$/,
    categoria: /^[a-zA-ZÀ-ÿ\s]+$/,
    nombreProducto : /^[0-9a-zA-ZÀ-ÿ\s]{1,20}$/,
    precio: /^[0-9]+.[0-9]{2}$/,
    descripcion: /^[\w\W\s]{1,150}$/

};




export const campos = {
    nombre: false,
    mensaje: false,
    correo: false,
    password: false,
    imagen: false,
    categoria: false,
    nombreProducto: false,
    precio: false,
    descripcion: false,
}

export const validarFormulario = (e) =>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.name)
        break;

        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, e.target.name)
        break;

        case "correo":
            validarCampo(expresiones.correo, e.target, e.target.name)
        break;

        case "password":
            validarCampo(expresiones.password, e.target, e.target.name)
        break;

        case "imagen":
            validarCampo(expresiones.imagen, e.target, e.target.name)
        break;

        case "categoria":
            validarCampo(expresiones.categoria, e.target, e.target.name)
        break;

        case "nombreProducto":
            validarCampo(expresiones.nombreProducto, e.target, e.target.name)
        break;

        case "precio":
            validarCampo(expresiones.precio, e.target, e.target.name)
        break;

        case "descripcion":
            validarCampo(expresiones.descripcion, e.target, e.target.name)
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


import { serviciosProducto } from "../services/productos-servicios.js";

const productoAdmin = (imagenUrl, nombre, precio, id) =>{

    const card = document.createElement("div");
    const contenido = `
    <img class="galeria__productos__card__img" src="${imagenUrl}" alt="${nombre}">
    <div class="galeria__productos__card__iconos">
        <a href="../screens/editar-producto.html?id=${id}" target="_blank"><i class="fa-solid fa-pen icon" data-editar></i></a>
        <i class="fa-regular fa-trash-can icon" id="${id}" data-eliminar></i>
    </div>
    <h4 class="galeria__productos__card__nombre">${nombre}</h4>
    <p>$ ${precio}</p>
    <a class="galeria__productos__card__numero" href="#"># ${id}</a>`;
    
    card.innerHTML = contenido;
    card.classList.add("galeria__productos__card");
    card.classList.add("textos");

    const deleteBtn = card.querySelector("[data-eliminar]");


    deleteBtn.addEventListener("click", () => {

    const id = deleteBtn.id
    console.log(id)
    serviciosProducto.eliminarProducto(id).then(respuesta => {
        console.log(respuesta)
    }).catch((err) => alert(err));
    });

    return card;
}




const galeriaEditar = document.querySelector("[data-todosProductos]");

const renderEditar = async () =>{
    try{
        const listaProductos = await serviciosProducto.listaProductos();
        listaProductos.forEach(elemento => {
            galeriaEditar.appendChild(productoAdmin(elemento.imagen, elemento.nombreProducto, elemento.precio, elemento.id));    

        });
    }
    catch(error){
        alert(error);
    }
}

renderEditar();
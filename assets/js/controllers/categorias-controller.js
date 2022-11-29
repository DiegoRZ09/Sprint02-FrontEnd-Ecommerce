import { serviciosProducto } from "../services/productos-servicios.js";

 export const productoIndex = (imagenUrl, nombre, precio, id) =>{

    const card = document.createElement("div");
    const contenido = `<img class="galeria__productos__card__img" src="${imagenUrl}" alt="${nombre}">
                        <h4 class="galeria__productos__card__nombre">${nombre}</h4>
                        <p>$ ${precio}</p>
                        <a class="galeria__productos__card__enlace" href="../screens/descripcion-producto.html?id=${id}">Ver producto</a>`;
    
    card.innerHTML = contenido;
    card.classList.add("galeria__productos__card");
    card.classList.add("textos");

    return card;
}



const starwarsSection = document.querySelector("[data-starwars]");
const consolasSection = document.querySelector("[data-consolas]");
const diversosSection = document.querySelector("[data-diversos]");

const renderIndex = async () =>{
    try{
        const listaProductos = await serviciosProducto.listaProductos();
        listaProductos.forEach(elemento => {
            if(elemento.categoria == "Star Wars"){
                starwarsSection.appendChild(productoIndex(elemento.imagen, elemento.nombreProducto, elemento.precio, elemento.id));    
            } else if(elemento.categoria == "Consolas"){
                consolasSection.appendChild(productoIndex(elemento.imagen, elemento.nombreProducto, elemento.precio, elemento.id));
            } else if (elemento.categoria == "Diversos"){
                diversosSection.appendChild(productoIndex(elemento.imagen, elemento.nombreProducto, elemento.precio, elemento.id));    
            }
        });
    }
    catch(error){
        alert(error);
    }
}



renderIndex();

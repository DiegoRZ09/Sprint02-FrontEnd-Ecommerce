import { serviciosProducto } from "../services/productos-servicios.js";

const productoDescripcion = (imagenUrl, nombre, precio, descripcion) =>{

    const info = document.createElement("section");
    const contenido = ` <div class="descripcion__imagen">
                            <img class="descripcion__imagen-img" src="${imagenUrl}" alt="${nombre}">
                        </div>

                        <div class="descripcion__texto textos">
                            <h2 class="descripcion__texto__titulo titulos">${nombre}</h2>
                            <span>$ ${precio}</span>
                            <p class="descripcion__texto__parrafos">${descripcion}</p>
                        </div>`
    
    info.innerHTML = contenido;
    info.classList.add("descripcion");
   

    return info;
}


const getInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if( id === null){
        alert("Producto no encontrado")
    }

    try{
        const producto = await serviciosProducto.detalleProducto(id);
        console.log(producto);

        const container = document.querySelector(".descripcion");
        container.appendChild(productoDescripcion(producto.imagen, producto.nombreProducto, producto.precio, producto.descripcion))

        const listaProductos = await serviciosProducto.listaProductos();
        

        listaProductos.forEach(elemento => {
            const similares = document.querySelector(".galeria__productos");

            const productoSimilar = (imagenUrl, nombre, precio, id) =>{

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

            if(elemento.categoria == producto.categoria && elemento.id != producto.id){
                similares.appendChild(productoSimilar(elemento.imagen, elemento.nombreProducto, elemento.precio, elemento.id))
            }
        });
    }
    catch(error){
       alert(error);
    }

};

getInfo();











const h1 = document.createElement("h1");
h1.textContent = "Tienda Mari Carmen Garcia ";
h1.classList.add("titulo");
document.body.appendChild(h1);

const contenedor = document.createElement("div");
contenedor.classList.add("contenedor");
document.body.appendChild(contenedor);

datos.forEach(articulo => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-articulo");

    const nombre = document.createElement("h2");
    nombre.textContent = articulo.nombre;
    nombre.classList.add("articulo-nombre");
    tarjeta.appendChild(nombre);

    const imagen = document.createElement ("img");
    imagen.classList.add("articulo-imagen");
    imagen.src = articulo.imagen;
    imagen.alt = articulo.nombre;
    tarjeta.appendChild(imagen);

    const descripcion = document.createElement("p");
    descripcion.textContent = articulo.descripcion;
    descripcion.classList.add("articulo-descripcion");
    tarjeta.appendChild(descripcion);

    const precio = document.createElement("p");
    precio.textContent = articulo.precio +" €";
    precio.classList.add("articulo-precio");
    tarjeta.appendChild(precio);

    contenedor.appendChild(tarjeta);

})
// 1. Modifica el contenido de título
    document.getElementById('titulo').textContent = "Noticias de la Región de Murcia";
// 2. Modifica la imagen que muestra el segundo articulo
    const articulos = document.querySelectorAll('article');
    if(articulos[1]) {
        articulos[1].querySelector('img').src = "macrofiesta.jpg";
    }
// 3. Oculta el último artículo
    const ultimoArticulo = articulos[articulos.length -1];
      if (ultimoArticulo) {
        ultimoArticulo.style.display = "none";
      }
// 4. Recorre los artículos y añade al inicio de la cabecera el número de noticia 
      articulos.forEach((articulo,i)=>{
        const cabecera = articulo.querySelector('div')
        if(cabecera) {
            cabecera.textContent = (i + 1) + " - " + cabecera.textContent;
        }
    });
// 5. Añade la clase cabecera  al primer div de cada artículo.
    articulos.forEach((articulo) => {
      const primerDiv = articulo.querySelector('div');
     if (primerDiv) {
         primerDiv.classList.add('cabecera');
     }
    });
// 6. Busca en todos los artículos donde aparece la cadena "Servicio Murciano de Salud", y sustitúyela por "S.M.S"
    articulos.forEach((articulo) => {
        const divs = articulo.querySelectorAll('div');
        divs.forEach (div => {
            div.textContent = div.textContent.replace (/Servicio Murciano de Salud/g,"S.M.S");
        });
    });
    
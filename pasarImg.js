function mostrarImagen(indice, sliderId) {
    const slider = document.getElementById(sliderId);
    const imagenes = slider.querySelectorAll('.imagenes img');
    imagenes.forEach(imagen => imagen.style.display = 'none');
    imagenes[indice].style.display = 'block';
  }
  
  function siguienteImagen(sliderId) {
    const slider = document.getElementById(sliderId);
    const imagenes = slider.querySelectorAll('.imagenes img');
    let imagenActual = 0;
    imagenes.forEach((imagen, index) => {
      if (imagen.style.display === 'block') {
        imagenActual = index;
      }
    });
    imagenActual = (imagenActual + 1) % imagenes.length;
    mostrarImagen(imagenActual, sliderId);
  }
  
  function anteriorImagen(sliderId) {
    const slider = document.getElementById(sliderId);
    const imagenes = slider.querySelectorAll('.imagenes img');
    let imagenActual = 0;
    imagenes.forEach((imagen, index) => {
      if (imagen.style.display === 'block') {
        imagenActual = index;
      }
    });
    imagenActual = (imagenActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(imagenActual, sliderId);
  }
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://picsum.photos/id/237/600/400',
        'https://picsum.photos/id/238/600/400',
        'https://picsum.photos/id/239/600/400',
        'https://picsum.photos/id/240/600/400',
      ];
    let currentIndex = 0;
    const imageFrame = document.getElementById('image-frame');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
  
    function showImage(index) {
      imageFrame.innerHTML = `<img src="${images[index]}" alt="Imagen ${index + 1}" />`;
    }
  
    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  
    // Mostrar la primera imagen al cargar.
    showImage(currentIndex);

    const botonGaleria = document.getElementById("verGaleria");

    botonGaleria.addEventListener("click", () => {
      window.location.href = "galeria.html"; 
    });

    const botonComisiones = document.getElementById("verComisiones");

    botonComisiones.addEventListener("click", () => {
      window.location.href = "comisiones.html"; 
    });

    const botonMas = document.getElementById("verMas");

    botonMas.addEventListener("click", () => {
      window.location.href = "mas.html"; 
    });
  });


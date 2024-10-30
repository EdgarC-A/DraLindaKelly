// JavaScript para manejar botones y desplazamiento táctil
const track = document.querySelector(".custom-carousel-track");
const prevButton = document.querySelector(".custom-carousel-prev-btn");
const nextButton = document.querySelector(".custom-carousel-next-btn");

let currentIndex = 0;
const cardWidth = document.querySelector(".custom-carousel-card").offsetWidth;
const totalCards = document.querySelectorAll(".custom-carousel-card").length;

// Función para calcular la cantidad de elementos a mostrar según el tamaño de la pantalla
function getItemsPerView() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    return 3; // Desktop
  } else if (screenWidth >= 768) {
    return 2; // Tablet
  } else {
    return 1; // Mobile
  }
}

// Función para actualizar la posición del carrusel
function updateCarouselPosition() {
  const itemsPerView = getItemsPerView();
  const offset = -currentIndex * cardWidth;
  track.style.transform = `translateX(${offset}px)`;
}

// Botón "Next"
nextButton.addEventListener("click", () => {
  const itemsPerView = getItemsPerView();
  if (currentIndex < totalCards - itemsPerView) {
    currentIndex += itemsPerView;
  } else {
    currentIndex = 0; // Reinicia al inicio cuando llega al final
  }
  updateCarouselPosition();
});

// Botón "Prev"
prevButton.addEventListener("click", () => {
  const itemsPerView = getItemsPerView();
  if (currentIndex > 0) {
    currentIndex -= itemsPerView;
  } else {
    currentIndex = totalCards - itemsPerView; // Regresa al final
  }
  updateCarouselPosition();
});

// Desplazamiento táctil
let startX;
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchmove", (e) => {
  const moveX = e.touches[0].clientX;
  const distance = startX - moveX;

  // Define el umbral para activar el cambio de tarjeta
  const itemsPerView = getItemsPerView();
  if (distance > 50) {
    // Swipe izquierda
    if (currentIndex < totalCards - itemsPerView) {
      currentIndex += itemsPerView;
    } else {
      currentIndex = 0; // Vuelve al inicio
    }
    updateCarouselPosition();
    startX = moveX; // Actualiza el punto de inicio
  } else if (distance < -50) {
    // Swipe derecha
    if (currentIndex > 0) {
      currentIndex -= itemsPerView;
    } else {
      currentIndex = totalCards - itemsPerView; // Vuelve al último grupo
    }
    updateCarouselPosition();
    startX = moveX;
  }
});

// Recalcular el número de elementos visibles en el evento resize
window.addEventListener("resize", updateCarouselPosition);

const track = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const images = document.querySelectorAll(".carousel-image");

const imageWidth = images[0].getBoundingClientRect().width;
let currentPosition = 0;
const imagesPerView = 3; // Mostramos 3 imágenes al mismo tiempo

nextButton.addEventListener("click", () => {
  if (currentPosition < images.length - imagesPerView) {
    currentPosition += imagesPerView;
    track.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
  }
});

prevButton.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition -= imagesPerView;
    track.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
  }
});

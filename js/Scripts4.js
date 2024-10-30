let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo, esconder navbar
    navbar.style.top = "-100px";
    navbar.classList.remove("scroll-up-bg");
  } else {
    // Scroll hacia arriba, mostrar navbar y agregar color de fondo
    navbar.style.top = "0";
    if (currentScroll > 0) {
      navbar.classList.add("scroll-up-bg");
    } else {
      // Si el scroll está al inicio, remover color de fondo
      navbar.classList.remove("scroll-up-bg");
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar que sea negativo
});

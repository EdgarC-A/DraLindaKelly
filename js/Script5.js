// JavaScript para alternar entre los párrafos
document.addEventListener("DOMContentLoaded", function () {
  let paragraph1 = document.getElementById("paragraph1");
  let paragraph2 = document.getElementById("paragraph2");

  setInterval(() => {
    if (paragraph1.style.display === "none") {
      paragraph1.style.display = "block";
      paragraph2.style.display = "none";
    } else {
      paragraph1.style.display = "none";
      paragraph2.style.display = "block";
    }
  }, 8000); // Cambia el párrafo cada 8 segundos
});

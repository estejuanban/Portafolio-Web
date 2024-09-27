// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse__hacia__arriba");
const mobile = document.querySelector("#menu-mobile");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Selecciones para Barra de navegación hamburguesa

mobile.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  // Cerrar el menú Mobil cuando se hace click en un enlace  

// Seleccionar enlaces de navegación

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
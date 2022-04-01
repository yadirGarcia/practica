const imagenes = [
  "img/pic1.jpg",
  "img/pic2.jpg",
  "img/pic3.jpg",
  "img/pic4.jpg",
  "img/pic5.jpg",
];
const imagen = document.querySelector(".galeria__imagen");
const barra = document.querySelector(".barra");
let active = 0;

function crearCarrusel(imagenes) {
  imagenes.forEach((imagenn) => {
    let imagen = document.createElement("img");
    imagen.classList.add("barra__imagen");
    imagen.src = imagenn;
    barra.appendChild(imagen);
  });
}

function bajarBrilloFoto(e, estado) {
  if (estado === 0) {
    imagen.classList.add("galeria__imagen--sombra");
    active = 1;
  } else {
    imagen.classList.remove("galeria__imagen--sombra");
    active = 0;
  }
}

crearCarrusel(imagenes);

document.addEventListener("click", (e) => {
  if (e.target.matches(".galeria__dark")) {
    bajarBrilloFoto(e, active);
  }

  if (e.target.matches(".barra__imagen")) {
    imagen.src = e.target.src;
  }
});

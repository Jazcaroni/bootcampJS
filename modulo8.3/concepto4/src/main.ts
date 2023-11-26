// Prueba de concepto 4 - Mostrar segunda imagen y volver las dos cartas
let carta1BocaArriba: boolean = false;
let carta2BocaArriba: boolean = false;
const manejarClick = (
  divCarta: HTMLDivElement,
  imagenSrc: string,
  cartaBocaArriba: boolean
) => {
  if (!cartaBocaArriba) {
    const imagen: HTMLImageElement | null =
      divCarta.querySelector(".carta-img");
    if (imagen) {
      imagen.src = imagenSrc;
      divCarta.style.backgroundColor = "#b799fe";
      return true;
    }
  }
  return false;
};
const divCarta1 = document.getElementById("divCarta1");
if (divCarta1 instanceof HTMLDivElement) {
  divCarta1.addEventListener("click", () => {
    carta1BocaArriba = manejarClick(
      divCarta1,
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
      carta1BocaArriba
    );
  });
}
const divCarta2 = document.getElementById("divCarta2");
if (divCarta2 instanceof HTMLDivElement) {
  divCarta2.addEventListener("click", () => {
    carta2BocaArriba = manejarClick(
      divCarta2,
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
      carta2BocaArriba
    );
  });
}

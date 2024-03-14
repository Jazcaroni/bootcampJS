//Prueba de concepto 2 - Mostrar imagen y volver la carta
const volteaCarta = (divCarta: any) => {
  const imagen = document.querySelector("img");
  if (
    imagen instanceof HTMLImageElement &&
    divCarta instanceof HTMLDivElement
  ) {
    imagen.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
    divCarta.style.backgroundColor = "#b799fe";
  }
};
const divCarta = document.getElementById("divCarta");
if (divCarta instanceof HTMLDivElement) {
  divCarta.addEventListener("click", () => {
    volteaCarta(divCarta);
  });
}

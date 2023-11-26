import {
  iniciaPartida,
  cartasBarajadas,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
} from "./motor";
import { Tablero, tablero } from "./modelo";

const btnEmpezarPartida = document.getElementById("empezar-partida");
if (btnEmpezarPartida && HTMLButtonElement) {
  btnEmpezarPartida.addEventListener("click", () => {
    if (tablero) {
      iniciaPartida(tablero);
    }
  });
}

// Identificar la clase de las cartas
export const cartasDivs =
  document.querySelectorAll<HTMLImageElement>(".cartas");

// manejar la función
export const usarClickCarta = (tablero: Tablero, indice: number) => {
  if (cartasDivs.length > 0) {
    // tener el indice de la carta
    const cartaDiv = cartasDivs[indice];
    // ver si se puede voltear la acarta antes de darle click
    if (sePuedeVoltearLaCarta(tablero, indice)) {
      //llamar a la función voltear la carta
      voltearLaCarta(tablero, indice);

      const imagenSrc: string = cartasBarajadas[indice].imagen;
      cartaDiv.style.backgroundImage = `url(${imagenSrc})`;
      cartaDiv.style.backgroundColor = "#b799fe";
    }
  }
};

if (cartasDivs.length > 0) {
  cartasDivs.forEach((cartasDiv, indice) => {
    cartasDiv.setAttribute("data-indice-id", indice.toString());
    cartasDiv.addEventListener("click", () => {
      const indice = parseInt(
        cartasDiv.getAttribute("data-indice-id") || "0",
        10
      );
      usarClickCarta(tablero, indice);
    });
  });
}

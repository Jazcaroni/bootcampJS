import { pedirCarta, mePlanto, nuevaPartida, simularPartida } from "./ui";

const btnPedirCarta = document.getElementById("btnDameCarta");
if (
  btnPedirCarta !== undefined &&
  btnPedirCarta !== null &&
  btnPedirCarta instanceof HTMLButtonElement
) {
  btnPedirCarta.addEventListener("click", pedirCarta);
}

const btnMePlanto = document.getElementById("btn-mePlanto");
if (
  btnMePlanto !== undefined &&
  btnMePlanto !== null &&
  btnMePlanto instanceof HTMLButtonElement
) {
  btnMePlanto.addEventListener("click", mePlanto);
}

const btnNuevaPartida = document.getElementById("btn-nuevaPartida");
if (
  btnNuevaPartida !== undefined &&
  btnNuevaPartida !== null &&
  btnNuevaPartida instanceof HTMLButtonElement
) {
  btnNuevaPartida.addEventListener("click", nuevaPartida);
}

const btnQueHabriaPasado = document.getElementById("btn-queHabriaPasado");
if (
  btnQueHabriaPasado !== undefined &&
  btnQueHabriaPasado !== null &&
  btnQueHabriaPasado instanceof HTMLButtonElement
) {
  btnQueHabriaPasado.addEventListener("click", simularPartida);
}

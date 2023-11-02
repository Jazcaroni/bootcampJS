import { partida, setPuntosTotales } from "./modelo";
import {
  generarNumeroAleatorio,
  generarNumeroDeCarta,
  sumarPuntuacion,
  obtenerUrlDeCarta,
  generarNuevoNumeroAleatorio,
  despuesDePlantar,
  obtenerResultado,
  obtenerEstadoPartida,
  calcularValorPunto,
} from "./motor";

export const pedirCarta = (): void => {
  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroDeCarta(numeroAleatorio);
  mostrarCarta(carta);
  const valorPunto = calcularValorPunto(carta);
  const puntosSumados = sumarPuntuacion(valorPunto);
  setPuntosTotales(puntosSumados);
  muestraPuntuacion();
  comprobarJuego();
  deshabilitarbtnNuevaPartida(false);
  deshabilitarbtnMePlanto(false);
};

export const mePlanto = () => {
  const mensaje = despuesDePlantar();
  deshabilitarBtnPedirCarta(true);
  if (mensaje) {
    mostrarPuntuacion(mensaje);
  }
  deshabilitarbtnMePlanto(true);
  deshabilitarQueHabriaPasado(false);
};

export const nuevaPartida = () => {
  partida.puntosTotales = 0;
  deshabilitarbtnMePlanto(true);
  deshabilitarBtnPedirCarta(false);
  deshabilitarQueHabriaPasado(true);
  muestraPuntuacion();
  mostrarPuntuacion("");
  mostrarCarta(0);
  deshabilitarbtnNuevaPartida(true);
};

export const simularPartida = () => {
  const nuevoNumeroAleatorio = generarNuevoNumeroAleatorio();
  const nuevaCarta = generarNumeroDeCarta(nuevoNumeroAleatorio);
  mostrarCarta(nuevaCarta);
  const valorPunto = calcularValorPunto(nuevaCarta);
  const puntosSumados = sumarPuntuacion(valorPunto);
  setPuntosTotales(puntosSumados);
  muestraPuntuacion();
  comprobarJuego();
  const resultado = obtenerResultado();
  mostrarPuntuacion(resultado);
  deshabilitarBtnPedirCarta(true);
  deshabilitarbtnMePlanto(true);
  deshabilitarQueHabriaPasado(true);
};

//1. Mostrar Puntuación  *********************

export const divMostrarPuntuacion = document.getElementById(
  "div-MostrarPuntuacion"
);
export const muestraPuntuacion = () => {
  if (
    divMostrarPuntuacion !== undefined &&
    divMostrarPuntuacion !== null &&
    divMostrarPuntuacion instanceof HTMLDivElement
  ) {
    divMostrarPuntuacion.textContent = `Puntuación: ${partida.puntosTotales}`;
  }
};

// 3. Mostrar carta   *********************
export const mostrarCarta = (carta: number) => {
  const divCartaJugador = document.getElementById("div-CartaJugador");
  if (
    divCartaJugador !== undefined &&
    divCartaJugador !== null &&
    divCartaJugador instanceof HTMLImageElement
  ) {
    divCartaJugador.src = obtenerUrlDeCarta(carta);
  }
};

//5. Game over  *********************

export const mostrarPuntuacion = (mensaje: string) => {
  const divMensajeResultadoJuego = document.getElementById(
    "div-mensajeResultadoJuego"
  );
  if (
    divMensajeResultadoJuego !== null &&
    divMensajeResultadoJuego !== undefined &&
    divMensajeResultadoJuego instanceof HTMLDivElement
  ) {
    divMensajeResultadoJuego.textContent = mensaje;
  }
};
export const deshabilitarBtnPedirCarta = (estaDesabilitado: boolean) => {
  const btnPedirCarta = document.getElementById("btnDameCarta");
  if (
    btnPedirCarta !== undefined &&
    btnPedirCarta !== null &&
    btnPedirCarta instanceof HTMLButtonElement
  ) {
    btnPedirCarta.disabled = estaDesabilitado;
  }
};

export const comprobarJuego = () => {
  if (partida.puntosTotales === 0) {
    deshabilitarQueHabriaPasado(false);
  }

  if (obtenerEstadoPartida() === "GANAR_PARTIDA") {
    ganarPartida();
  }
  if (obtenerEstadoPartida() === "PERDER_PARTIDA") {
    perderPartida();
  }
};

const ganarPartida = () => {
  let mensaje = "Felicitaciones 😃 ¡Has ganado! 🏆🏅";
  deshabilitarBtnPedirCarta(true);
  deshabilitarbtnMePlanto(true);
  deshabilitarQueHabriaPasado(true);
  mostrarPuntuacion(mensaje);
};
const perderPartida = () => {
  let mensaje = "Ups!!! ¡Game Over!😥 Intentalo nuevamente";
  deshabilitarBtnPedirCarta(true);
  deshabilitarbtnMePlanto(true);
  deshabilitarQueHabriaPasado(true);
  mostrarPuntuacion(mensaje);
};

//6. Me planto *********************
export const deshabilitarbtnMePlanto = (estaDesabilitado: boolean) => {
  const btnMePlanto = document.getElementById("btn-mePlanto");
  if (
    btnMePlanto !== undefined &&
    btnMePlanto !== null &&
    btnMePlanto instanceof HTMLButtonElement
  ) {
    btnMePlanto.disabled = estaDesabilitado;
  }
};

//7. Nueva partida *********************
export const deshabilitarbtnNuevaPartida = (estaDesabilitado: boolean) => {
  const btnNuevaPartida = document.getElementById("btn-nuevaPartida");
  if (
    btnNuevaPartida !== undefined &&
    btnNuevaPartida !== null &&
    btnNuevaPartida instanceof HTMLButtonElement
  ) {
    btnNuevaPartida.disabled = estaDesabilitado;
  }
};

// Apartado OPCIONAL  *********************
export const deshabilitarQueHabriaPasado = (estaDesabilitado: boolean) => {
  const btnQueHabriaPasado = document.getElementById("btn-queHabriaPasado");
  if (
    btnQueHabriaPasado !== undefined &&
    btnQueHabriaPasado !== null &&
    btnQueHabriaPasado instanceof HTMLButtonElement
  ) {
    btnQueHabriaPasado.disabled = estaDesabilitado;
  }
};

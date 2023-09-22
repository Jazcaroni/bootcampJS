const LIMITE_PUNTUACION: number = 7.5;
//1. Mostrar Puntuación  *********************
let puntosTotales: number = 0;
const divMostrarPuntuacion = document.getElementById("div-MostrarPuntuacion");
const muestraPuntuacion = () => {
  if (
    divMostrarPuntuacion !== undefined &&
    divMostrarPuntuacion !== null &&
    divMostrarPuntuacion instanceof HTMLDivElement
  ) {
    divMostrarPuntuacion.textContent = `Puntuación: ${puntosTotales}`;
  }
};
// 2. Pedir carta  *********************
const pedirCarta = (): void => {
  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroDeCarta(numeroAleatorio);
  mostrarCarta(carta);
  sumarPuntuacion(carta);
  muestraPuntuacion();
  comprobarJuego();
  deshabilitarbtnNuevaPartida(false);
  deshabilitarbtnMePlanto(false);
};
const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};
const generarNumeroDeCarta = (numeroAleatorio: number) => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};
const obtenerUrlDeCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};
const calcularValorPunto = (carta: number) => (carta >= 10 ? 0.5 : carta);
const btnPedirCarta = document.getElementById("btnDameCarta");
if (
  btnPedirCarta !== undefined &&
  btnPedirCarta !== null &&
  btnPedirCarta instanceof HTMLButtonElement
) {
  btnPedirCarta.addEventListener("click", pedirCarta);
}
// 3. Mostrar carta   *********************
const mostrarCarta = (carta: number) => {
  const divCartaJugador = document.getElementById("div-CartaJugador");
  if (
    divCartaJugador !== undefined &&
    divCartaJugador !== null &&
    divCartaJugador instanceof HTMLImageElement
  ) {
    divCartaJugador.src = obtenerUrlDeCarta(carta);
  }
};
//4. Sumar puntuación  *********************
const sumarPuntuacion = (carta: number) => {
  const valorPunto = calcularValorPunto(carta);
  puntosTotales += valorPunto;
};
//5. Game over  *********************
const comprobarJuego = () => {
  if (puntosTotales === 0) {
    deshabilitarQueHabriaPasado(false);
  }
  if (puntosTotales > LIMITE_PUNTUACION) {
    perderPartida();
  }
  if (puntosTotales === LIMITE_PUNTUACION) {
    ganarPartida();
  }
};
const mostrarPuntuacion = (mensaje: string) => {
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
const deshabilitarBtnPedirCarta = (estaDesabilitado: boolean) => {
  const btnPedirCarta = document.getElementById("btnDameCarta");
  if (
    btnPedirCarta !== undefined &&
    btnPedirCarta !== null &&
    btnPedirCarta instanceof HTMLButtonElement
  ) {
    btnPedirCarta.disabled = estaDesabilitado;
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
const deshabilitarbtnMePlanto = (estaDesabilitado: boolean) => {
  const btnMePlanto = document.getElementById("btn-mePlanto");
  if (
    btnMePlanto !== undefined &&
    btnMePlanto !== null &&
    btnMePlanto instanceof HTMLButtonElement
  ) {
    btnMePlanto.disabled = estaDesabilitado;
  }
};
const mePlanto = () => {
  const mensaje = despuesDePlantar();
  deshabilitarBtnPedirCarta(true);
  if (mensaje) {
    mostrarPuntuacion(mensaje);
  }
  deshabilitarbtnMePlanto(true);
  deshabilitarQueHabriaPasado(false);
};
const despuesDePlantar = () => {
  if (puntosTotales <= 4) {
    return "Has sido muy conservador 🤔";
  } else if (puntosTotales === 4.5) {
    return "Has sido conservador🥱";
  } else if (puntosTotales >= 5) {
    return "Te has asustado eh? 😅";
  } else if (puntosTotales >= 6 && puntosTotales <= 7) {
    return "Casi casi... 🙄";
  } //else if (puntosTotales === 7.5) {
  // return "¡ Lo has clavado! 😃 ¡Enhorabuena! 🏆🏅";
  //}
  return "Algo ha salido mal 😵";
};
const btnMePlanto = document.getElementById("btn-mePlanto");
if (
  btnMePlanto !== undefined &&
  btnMePlanto !== null &&
  btnMePlanto instanceof HTMLButtonElement
) {
  btnMePlanto.addEventListener("click", mePlanto);
}
//7. Nueva partida *********************
const deshabilitarbtnNuevaPartida = (estaDesabilitado: boolean) => {
  const btnNuevaPartida = document.getElementById("btn-nuevaPartida");
  if (
    btnNuevaPartida !== undefined &&
    btnNuevaPartida !== null &&
    btnNuevaPartida instanceof HTMLButtonElement
  ) {
    btnNuevaPartida.disabled = estaDesabilitado;
  }
};
const nuevaPartida = () => {
  puntosTotales = 0;
  deshabilitarbtnMePlanto(true);
  deshabilitarBtnPedirCarta(false);
  deshabilitarQueHabriaPasado(true);
  muestraPuntuacion();
  mostrarPuntuacion("");
  mostrarCarta(0);
  deshabilitarbtnNuevaPartida(true);
};
const btnNuevaPartida = document.getElementById("btn-nuevaPartida");
if (
  btnNuevaPartida !== undefined &&
  btnNuevaPartida !== null &&
  btnNuevaPartida instanceof HTMLButtonElement
) {
  //agregar el evento click
  btnNuevaPartida.addEventListener("click", nuevaPartida);
}
// Apartado OPCIONAL  *********************
const deshabilitarQueHabriaPasado = (estaDesabilitado: boolean) => {
  const btnQueHabriaPasado = document.getElementById("btn-queHabriaPasado");
  if (
    btnQueHabriaPasado !== undefined &&
    btnQueHabriaPasado !== null &&
    btnQueHabriaPasado instanceof HTMLButtonElement
  ) {
    btnQueHabriaPasado.disabled = estaDesabilitado;
  }
};
const obtenerResultado = (): string => {
  if (puntosTotales === LIMITE_PUNTUACION) {
    return "¡Lo habrías clavado! 😃 ¡Suerte para a próxima! 🏆🏅";
  } else if (puntosTotales > LIMITE_PUNTUACION) {
    return "Te habrías pasado de 7.5 😥";
  } else {
    return `Habrías llegado a ${puntosTotales}, ¡pero ya te habías plantado!`;
  }
};
const generarNuevoNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};
const simularPartida = () => {
  const nuevoNumeroAleatorio = generarNuevoNumeroAleatorio();
  const nuevaCarta = generarNumeroDeCarta(nuevoNumeroAleatorio);
  mostrarCarta(nuevaCarta);
  sumarPuntuacion(nuevaCarta);
  muestraPuntuacion();
  comprobarJuego();
  const resultado = obtenerResultado();
  mostrarPuntuacion(resultado);
  deshabilitarBtnPedirCarta(true);
  deshabilitarbtnMePlanto(true);
  deshabilitarQueHabriaPasado(true);
};
const btnQueHabriaPasado = document.getElementById("btn-queHabriaPasado");
if (
  btnQueHabriaPasado !== undefined &&
  btnQueHabriaPasado !== null &&
  btnQueHabriaPasado instanceof HTMLButtonElement
) {
  btnQueHabriaPasado.addEventListener("click", simularPartida);
}

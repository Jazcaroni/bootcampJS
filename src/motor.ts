import { LIMITE_PUNTUACION, partida } from "./modelo";

export const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const generarNumeroDeCarta = (numeroAleatorio: number) => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};
export const calcularValorPunto = (carta: number) =>
  carta >= 10 ? 0.5 : carta;

export const obtenerUrlDeCarta = (carta: number) => {
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

export const sumarPuntuacion = (carta: number) => {
  const valorPunto = calcularValorPunto(carta);
  partida.puntosTotales += valorPunto;
};

export const generarNuevoNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const despuesDePlantar = () => {
  if (partida.puntosTotales <= 4) {
    return "Has sido muy conservador 🤔";
  } else if (partida.puntosTotales === 4.5) {
    return "Has sido conservador🥱";
  } else if (partida.puntosTotales >= 5) {
    return "Te has asustado eh? 😅";
  } else if (partida.puntosTotales >= 6 && partida.puntosTotales <= 7) {
    return "Casi casi... 🙄";
  } //else if (partida.puntosTotales === 7.5) {
  // return "¡ Lo has clavado! 😃 ¡Enhorabuena! 🏆🏅";
  //}
  return "Algo ha salido mal 😵";
};

export const obtenerResultado = (): string => {
  if (partida.puntosTotales === LIMITE_PUNTUACION) {
    return "¡Lo habrías clavado! 😃 ¡Suerte para a próxima! 🏆🏅";
  } else if (partida.puntosTotales > LIMITE_PUNTUACION) {
    return "Te habrías pasado de 7.5 😥";
  } else {
    return `Habrías llegado a ${partida.puntosTotales}, ¡pero ya te habías plantado!`;
  }
};

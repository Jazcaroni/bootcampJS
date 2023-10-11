export const LIMITE_PUNTUACION: number = 7.5;

export const PERDER_PARTIDA: EstadoPartida = "PERDER_PARTIDA";
export const GANAR_PARTIDA: EstadoPartida = "GANAR_PARTIDA";

interface Partida {
  numeroAleatorio: number;
  generarNumeroDeCarta: number;
  puntosTotales: number;
  estado: EstadoPartida;
}
export const partida: Partida = {
  numeroAleatorio: 0,
  generarNumeroDeCarta: 0,
  puntosTotales: 0,
  estado: "PERDER_PARTIDA",
};

export type EstadoPartida = "PERDER_PARTIDA" | "GANAR_PARTIDA" | "EN_CURSO";

export const setPuntosTotales = (nuevosPuntos: number): void => {
  partida.puntosTotales = nuevosPuntos;
};

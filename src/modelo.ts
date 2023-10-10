export const LIMITE_PUNTUACION: number = 7.5;

export const PERDER_PARTIDA: number = 1;
export const GANAR_PARTIDA: number = 2;

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

export type EstadoPartida = "GANAR_PARTIDA" | "PERDER_PARTIDA";

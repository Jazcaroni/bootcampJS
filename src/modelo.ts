export const LIMITE_PUNTUACION: number = 7.5;
export let puntosTotales: number = 0;

interface Partida {
  numeroAleatorio: number;
  generarNumeroDeCarta: number;
  puntosTotales: number;
}
export const partida: Partida = {
  numeroAleatorio: 0,
  generarNumeroDeCarta: 0,
  puntosTotales: 0,
};

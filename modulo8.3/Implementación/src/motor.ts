import { cartas, Carta, Tablero } from "./modelo";
/*
En el motor nos va a hacer falta un método para barajar cartas
*/

const barajarCartas = (cartas: Carta[]): Carta[] => {
  const cartasBarajadas = [...cartas];
  return cartasBarajadas.sort(() => 0.5 - Math.random());
};

// Crear un array de cartas barajadas
export const cartasBarajadas = barajarCartas(cartas);

/*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  const { estadoPartida, cartas } = tablero;
  const carta = cartas[indice];
  return (
    estadoPartida !== "PartidaCompleta" &&
    (estadoPartida === "PartidaNoIniciada" ||
      (estadoPartida !== "DosCartasLevantadas" &&
        !carta.encontrada &&
        !carta.estaVuelta))
  );
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  const { estadoPartida, cartas } = tablero;
  const carta = cartas[indice];
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    carta.estaVuelta = !carta.estaVuelta;

    switch (estadoPartida) {
      case "PartidaNoIniciada":
        tablero.estadoPartida = "CeroCartasLevantadas";
        break;
      case "CeroCartasLevantadas":
        tablero.estadoPartida = "UnaCartaLevantada";
        break;
      case "UnaCartaLevantada":
        tablero.estadoPartida = "DosCartasLevantadas";

        break;
      case "DosCartasLevantadas":
        break;
      default:
        break;
    }
  }
};

/*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  const { cartas } = tablero;
  const cartaA = cartas[indiceA];
  const cartaB = cartas[indiceB];
  return cartaA.idFoto === cartaB.idFoto;
};

/*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  const { cartas } = tablero;

  cartas[indiceA].encontrada = true;
  cartas[indiceB].encontrada = true;
};

/*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  const { cartas } = tablero;
  cartas[indiceA].estaVuelta = false;
  cartas[indiceB].estaVuelta = false;
};

/*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  const { cartas } = tablero;

  // Verificar si todas las cartas están encontradas
  return cartas.every((carta) => carta.encontrada);
};

/*
  Iniciar partida
  */

export const iniciaPartida = (tablero: Tablero): void => {
  reiniciarTablero(tablero);
};
const reiniciarTablero = (tablero: Tablero): void => {
  for (const carta of tablero.cartas) {
    carta.estaVuelta = false;
    carta.encontrada = false;
  }

  tablero.estadoPartida = "PartidaNoIniciada";
};

import {
  obtenerUltimoDigito,
  eliminaUltimoDigito,
  multiplicaPorDosSaltandoUno,
  sumaDecenasUnidadesColeccion,
  sumarDigitos,
  calculaFlagDeSumaTotal,
} from "./master-card.helpers";

const estaLaTarjetaEstaBienFormada = (numeroTarjeta: string) => {
  if (
    !numeroTarjeta ||
    numeroTarjeta.length !== 16 ||
    isNaN(parseInt(numeroTarjeta))
  ) {
    throw new Error("No se ha introducido un número");
  }
};
interface TarejataMasterCard {
  ultimoDigito: number;
  masterCardSinDigitoControl: string;
}
const separaDigitoControl = (numeroTarjeta: string): TarejataMasterCard => ({
  ultimoDigito: obtenerUltimoDigito(numeroTarjeta),
  masterCardSinDigitoControl: eliminaUltimoDigito(numeroTarjeta),
});
const calculaFlagDeValidacion = (
  masterCardSinDigitoControl: string
): number => {
  const masterCardMultiplicadaPorDos = multiplicaPorDosSaltandoUno(
    masterCardSinDigitoControl
  );
  const masterCardSumaDecenasUnidades = sumaDecenasUnidadesColeccion(
    masterCardMultiplicadaPorDos
  );
  const masterCardSumaTotal = sumarDigitos(masterCardSumaDecenasUnidades);
  return calculaFlagDeSumaTotal(masterCardSumaTotal);
};

export const validaTarjetaMasterCard = (numeroTarjeta: string): boolean => {
  estaLaTarjetaEstaBienFormada(numeroTarjeta);

  const { masterCardSinDigitoControl, ultimoDigito } =
    separaDigitoControl(numeroTarjeta);

  const flagControlCalculado = calculaFlagDeValidacion(
    masterCardSinDigitoControl
  );
  return flagControlCalculado === ultimoDigito;
};

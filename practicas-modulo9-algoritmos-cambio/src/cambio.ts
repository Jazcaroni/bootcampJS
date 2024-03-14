import { calcularEntrada } from "./cambio.helper";
import { Cambio } from "./model";

const arrayBilletesMonedas = [
  50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

export const calcularCambio = (compra: number, pago: number): Cambio[] => {
  if (!compra || !pago) {
    throw new Error("Los parámetros introducidos no son correctos");
  }
  const cambio = pago - compra;
  let cambioRestante = cambio;
  const resultado: Cambio[] = arrayBilletesMonedas.reduce(
    (acumulador: Cambio[], billeteMoneda: number) => {
      if (cambioRestante === 0) {
        return acumulador;
      }
      const { cuantos, restoCantidad } = calcularEntrada(
        cambioRestante,
        billeteMoneda
      );
      cambioRestante = restoCantidad;
      return cuantos > 0
        ? [...acumulador, { moneda: billeteMoneda, cuantos }]
        : acumulador;
    },
    []
  );
  return resultado;
};

/*for (let i = 0; i < arrayBilletesMonedas.length; i++) {
    const billeteMoneda = arrayBilletesMonedas[i];
    const { cuantos, restoCantidad } = calcularEntrada(
      cambioRestante,
      billeteMoneda
    );

    if (cuantos > 0) {
      resultado = [...resultado, { moneda: billeteMoneda, cuantos }];
      cambioRestante = restoCantidad;
    }
    if (cambioRestante === 0) {
      break;
    }
  }*/

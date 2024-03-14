export const eliminaUltimoDigito = (numeroTarjeta: string): string => {
  if (numeroTarjeta === undefined || numeroTarjeta === null) {
    throw new Error("No se ha introducido una cadena");
  }
  if (numeroTarjeta === "") {
    throw new Error("La cadena está vacia");
  }
  return numeroTarjeta.slice(0, numeroTarjeta.length - 1);
};

export const obtenerUltimoDigito = (cadena: string): number => {
  if (!cadena) {
    throw new Error("No se ha introducido una cadena de texto");
  }
  return parseInt(cadena.slice(-1));
  //return parseInt(cadena.slice(-1));
};

export const multiplicaPorDosSaltandoUno = (cadena: string): number[] => {
  if (!cadena) {
    throw new Error("No se ha introducido una cadena de texto");
  }
  let resultado: number[] = [];
  let porDos = true;
  for (let i = cadena.length - 1; i >= 0; i--) {
    const nuevoNumero = porDos ? parseInt(cadena[i]) * 2 : parseInt(cadena[i]);
    resultado = [nuevoNumero, ...resultado];
    porDos = !porDos;
  }
  return resultado;
};

export const sumaDecenasUnidades = (numero: number): number => {
  if (numero < 10) return numero;
  const unidades = numero % 10;
  const decenas = Math.floor(numero / 10);
  return unidades + decenas;
};
export const sumaDecenasUnidadesColeccion = (numeros: number[]): number[] => {
  if (!numeros) {
    throw new Error("No se ha introducido un número");
  }
  return numeros.map(sumaDecenasUnidades);
};

export const sumarDigitos = (numeros: number[]): number => {
  if (!numeros) {
    throw new Error("No se ha introducido un número");
  }
  return numeros.reduce(
    (acumulador, numeroActual) => acumulador + numeroActual,
    0
  );
};

export const calculaFlagDeSumaTotal = (sumaTotal: number): number => {
  if (!sumaTotal) {
    throw new Error("No se ha introducido un número");
  }
  return 10 - (sumaTotal % 10);
};

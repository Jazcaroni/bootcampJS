import { productos, LineaTicket, porcentajeIva } from "./modelo";

export const calculaTicket = (lineasTicket: LineaTicket[]) => {
  for (let i = 0; i < lineasTicket.length; i++) {
    // ...
  }
};

export const calcularIva = (precio: number, tipoIva: TipoIVA): number => {
  const porcentaje = porcentajeIva[TipoIva];

  if (porcentaje === undefined || porcentaje === null) {
    throw new Error("Tipo de IVA no encontrado en la lista de porcentajes");
  }

  const iva = (precio * porcentaje) / 100;
  return parseFloat(iva.toFixed(2));
};

import {
  LineaTicket,
  ResultadoLineaTicket,
  TotalPorTipoIva,
  TipoIva,
  porcentajeIva,
} from "./modelo";

export const calculaTicket = (lineasTicket: LineaTicket[]) => {
  const lineasResultado: ResultadoLineaTicket[] = [];
  let totalSinIva = 0;
  let totalConIva = 0;

  for (let i = 0; i < lineasTicket.length; i++) {
    const linea = lineasTicket[i];
    const producto = linea.producto;
    const precioSinIva = producto.precio * linea.cantidad;
    const iva = calcularIva(producto.precio, producto.tipoIva) * linea.cantidad;
    const precioConIva = precioSinIva + iva;
    lineasResultado.push({
      nombre: producto.nombre,
      cantidad: linea.cantidad,
      precionSinIva: precioSinIva,
      tipoIva: producto.tipoIva,
      precioConIva: precioConIva,
    });
    totalSinIva += precioSinIva;
    totalConIva += precioConIva;
  }
  const totalIva = totalConIva - totalSinIva;

  const desgloseIva: TotalPorTipoIva[] = Object.entries(porcentajeIva).map(
    ([tipoIva, porcentaje]) => ({
      tipoIva: tipoIva as TipoIva,
      cuantia: (totalSinIva * porcentaje) / 100,
    })
  );
  return {
    lineas: lineasResultado,
    total: {
      totalSinIva: totalSinIva,
      totalConIva: totalConIva,
      totalIva: totalIva,
    },
    desgloseIva: desgloseIva,
  };
};

export const calcularIva = (precio: number, tipoIva: TipoIva): number => {
  const porcentaje = porcentajeIva[tipoIva];

  if (porcentaje === undefined || porcentaje === null) {
    throw new Error("Tipo de IVA no encontrado en la lista de porcentajes");
  }

  const iva = (precio * porcentaje) / 100;
  return parseFloat(iva.toFixed(2));
};
console.log(calculaTicket);

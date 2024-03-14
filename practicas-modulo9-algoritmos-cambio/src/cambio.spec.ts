import { calcularCambio } from "./cambio";
import { Cambio } from "./model";

describe("calcularCambio", () => {
  it("Debería devolver throw si es una entrada undefined", () => {
    //Arrange
    const compra: any = undefined;
    const pago: any = undefined;

    //Act
    const result = () => calcularCambio(compra, pago);
    //Act
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });
  it("Debería devolver throw si es una entrada null", () => {
    //Arrange
    const compra: any = null;
    const pago: any = null;

    //Act
    const result = () => calcularCambio(compra, pago);
    //Act
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });
  it("2.5 €, usuario paga 50 € --> devolucion [2 de 20, 1 de 5, 2 de 1, 1 de 0.5]", () => {
    // Arrange
    const compra = 2.5;
    const pago = 50;
    // Act
    const result = calcularCambio(compra, pago);
    // Assert
    const expected: Cambio[] = [
      { moneda: 20, cuantos: 2 },
      { moneda: 5, cuantos: 1 },
      { moneda: 2, cuantos: 1 },
      { moneda: 0.5, cuantos: 1 },
    ];
    expect(result).toEqual(expected);
  });
  it("4.82 €, usuario paga 5.32 € --> devolucion [1 moneda de 0.5]", () => {
    // Arrange
    const compra = 4.82;
    const pago = 5.32;
    // Act
    const result = calcularCambio(compra, pago);
    // Assert
    const expected: Cambio[] = [{ moneda: 0.5, cuantos: 1 }];
    expect(result).toEqual(expected);
  });
  it("2 €, usuario paga 6 € --> devolucion [2 monedas de 2]", () => {
    // Arrange
    const compra = 2;
    const pago = 6;
    // Act
    const result = calcularCambio(compra, pago);
    // Assert
    const expected: Cambio[] = [{ moneda: 2, cuantos: 2 }];
    expect(result).toEqual(expected);
  });
});

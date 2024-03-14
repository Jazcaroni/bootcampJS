import { calcularEntrada } from "./cambio.helper";

describe("calcularEntrada", () => {
  it("Devolver si la entrada es indefinida", () => {
    //Arrange
    const cantidad: any = undefined;
    const billeteMoneda: any = undefined;
    //Act
    const result = () => calcularEntrada(cantidad, billeteMoneda);
    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });
  it("Devolver si la entrada es null", () => {
    //Arrange
    const cantidad: any = null;
    const billeteMoneda: any = null;
    //Act
    const result = () => calcularEntrada(cantidad, billeteMoneda);
    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });
  it("Devolver: 2.5, billete 50 --> {cuantos: 0, restoCantidad: 2.5}", () => {
    // Arrange
    const cantidad = 2.5;
    const billeteMoneda = 50;
    // Act
    const result = calcularEntrada(cantidad, billeteMoneda);
    // Assert
    const expected = { cuantos: 0, restoCantidad: 2.5 };
    expect(result).toEqual(expected);
  });

  it("Devolver 2.5, billete2 ---> {cuantos:1, restoCantidad: 0.5}", () => {
    // Arrange
    const cantidad = 2.5;
    const billeteMoneda = 2;
    // Act
    const result = calcularEntrada(cantidad, billeteMoneda);
    // Assert
    const expected = { cuantos: 1, restoCantidad: 0.5 };
    expect(result).toEqual(expected);
  });

  it("Devolver 7.25, billete 5---> {cuantos: 1, restoCantidad: 2.25}", () => {
    //Arrange
    const cantidad = 7.25;
    const billeteMoneda = 5;
    //Act
    const result = calcularEntrada(cantidad, billeteMoneda);
    //Assert
    const expected = { cuantos: 1, restoCantidad: 2.25 };
    expect(result).toEqual(expected);
  });
});

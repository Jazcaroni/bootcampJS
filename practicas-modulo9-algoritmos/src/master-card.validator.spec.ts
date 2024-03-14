/* Válidas 
5506927427317625;
5553042241984105;
5555553753048194;
5555555555554444;
*/

import { validaTarjetaMasterCard } from "./master-card.validator";

/* No Válidas 
5506927627317626;
5553042241944106;
5525553753048195;
5554555555554445;
*/
describe("validaTarjetaMasterCard", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    //Arrange
    const numeroTarjeta: any = undefined;
    //Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);
    //Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería devolver un throw si la entrada es null ", () => {
    //Arrange
    const numeroTarjeta: any = null;
    //Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);
    //Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería devolver un throw si la entrada es vacío ", () => {
    //Arrange
    const numeroTarjeta = "";
    //Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);
    //Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería devolver un throw si la entrada no se puede convertir a un número ", () => {
    //Arrange
    const numeroTarjeta = "abalkajdañlkdjseo";
    //Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);
    //Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería devolver un throw si la entrada no tiene 16 número ", () => {
    //Arrange
    const numeroTarjeta = "123456789";
    //Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);
    //Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it.each([
    ["5506927427317625", true],
    ["5553042241984105", true],
    ["5555553753048194", true],
    ["5506927627317626", false],
    ["5553042241944106", false],
    ["5525553753048195", false],
  ])(
    "si la entrada es %s debería devolver %s",
    (numeroTarjeta: string, valorEsperado: boolean) => {
      // Arrange
      // Act
      const result = validaTarjetaMasterCard(numeroTarjeta);
      // Assert
      expect(result).toBe(valorEsperado);
    }
  );
});

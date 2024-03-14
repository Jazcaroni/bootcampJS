import {
  eliminaUltimoDigito,
  multiplicaPorDosSaltandoUno,
  obtenerUltimoDigito,
  sumaDecenasUnidadesColeccion,
  sumarDigitos,
  calculaFlagDeSumaTotal,
} from "./master-card.helpers";

describe("eliminaUltimoDigito", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const cadena: any = undefined;
    //Act
    const result = () => eliminaUltimoDigito(cadena);

    //Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });
  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const cadena: any = null;
    //Act
    const result = () => eliminaUltimoDigito(cadena);

    //Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });
  it("Deberia de devolver un throw si la entrada es string vacío", () => {
    //Arrange
    const cadena = "";
    //Act
    const result = () => eliminaUltimoDigito(cadena);

    //Assert
    expect(result).toThrowError("La cadena está vacia");
  });
  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const cadena: any = null;
    //Act
    const result = () => eliminaUltimoDigito(cadena);

    //Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });
  it("Deberia de devolver un string sin el último digito", () => {
    //Arrange
    const cadena = "123456789";
    //Act
    const result = eliminaUltimoDigito(cadena);

    //Assert
    expect(result).toBe("12345678");
  });
});

describe("obtenerUltimoDigito", () => {
  it("Deberia devolvoer un throw si la entrada es undefined", () => {
    //Arrange
    const cadena: any = undefined;
    //Act
    const result = () => obtenerUltimoDigito(cadena);
    //Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });
  it("Deberia devolvoer un throw si la entrada es  null", () => {
    //Arrange
    const cadena: any = null;
    //Act
    const result = () => obtenerUltimoDigito(cadena);
    //Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });
  it("Deberia devolvoer un throw si la entrada es vacío", () => {
    //Arrange
    const cadena = "";
    //Act
    const result = () => obtenerUltimoDigito(cadena);
    //Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });
  it("debería devolver el último número de la cadena convertido a número", () => {
    //Arrange
    const cadena = "123456789";
    //Act
    const result = obtenerUltimoDigito(cadena);
    //Assert
    expect(result).toBe(9);
  });
});

describe("multiplicaPorDosSaltandoUno", () => {
  it("Deberia devolver un throw si la entrada es udenfined", () => {
    //Arrange
    const cadena: any = undefined;
    //Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);
    //Assert
    expect(result).toThrowError("No se ha introducido una cadena de texto");
  });
  it("Deberia devolver un throw si la entrada es null", () => {
    //Arrange
    const cadena: any = null;
    //Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);
    //Assert
    expect(result).toThrowError("No se ha introducido una cadena de texto");
  });
  it("Deberia devolver un throw si la entrada es string vacío", () => {
    //Arrange
    const cadena = "";
    //Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);
    //Assert
    expect(result).toThrowError("No se ha introducido una cadena de texto");
  });
  it("Deberia devolver un array con lo números separados y si leemmos el array de atrás para adelante, los números que están en posición impar multiplicados por dos", () => {
    //Arrange
    const cadena = "123456789";
    //Act
    const result = multiplicaPorDosSaltandoUno(cadena);
    //Assert
    expect(result).toEqual([2, 2, 6, 4, 10, 6, 14, 8, 18]);
  });
});

describe("sumaDecenasUnidades", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const numero: any = undefined;
    // Act
    const result = () => sumaDecenasUnidadesColeccion(numero);
    // Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const numero: any = null;
    // Act
    const result = () => sumaDecenasUnidadesColeccion(numero);
    // Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería devolver un array con la suma de las decenas y las unidades de los números de la entrada", () => {
    // Arrange
    const input: number[] = [1, 2, 18, 4, 5, 12, 7, 14, 9];
    // Act
    const result = sumaDecenasUnidadesColeccion(input);
    // Assert
    expect(result).toEqual([1, 2, 9, 4, 5, 3, 7, 5, 9]);
  });
});
describe("sumarDigitos", () => {
  it("Deberia devolver un throw si la entrada es undefined", () => {
    //Arrange
    const numero: any = undefined;
    //Act
    const result = () => sumarDigitos(numero);
    //Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("Deberia devolver un throw si la entrada es null", () => {
    //Arrange
    const numero: any = null;
    //Act
    const result = () => sumarDigitos(numero);
    //Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería de devolver la suma de los dígitos de un array de números", () => {
    //Arrange
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //Act
    const result = sumarDigitos(numeros);
    //Assert
    expect(result).toBe(45);
  });
});
describe("calculaFlagDeSumaTotal", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const sumaTotal: any = undefined;
    // Act
    const result = () => calculaFlagDeSumaTotal(sumaTotal);
    // Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const sumaTotal: any = null;
    // Act
    const result = () => calculaFlagDeSumaTotal(sumaTotal);
    // Assert
    expect(result).toThrowError("No se ha introducido un número");
  });
  it("Devuelve el numero de un solo digito", () => {
    //Arrage
    const sumaTotal = 73;
    //Act
    const result = calculaFlagDeSumaTotal(sumaTotal);
    //Assert
    expect(result).toBe(7);
  });
  it("Devuelve el numero de un solo digito", () => {
    //Arrage
    const sumaTotal = 67;
    //Act
    const result = calculaFlagDeSumaTotal(sumaTotal);
    //Assert
    expect(result).toBe(3);
  });
});

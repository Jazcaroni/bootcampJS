import { calcularNotaFinal } from "./main";

describe("calculaNotaFinal", () => {
  it("deberiadevolver la nota final del alumno", () => {
    //Arrange
    const notasMedias = [8, 7];
    const peso = [0.6, 0.4];

    //Act
    const result = calcularNotaFinal(notasMedias, peso);
    //Assert
    const notaFinal = 7.6;
    expect(result).toEqual(notaFinal);
  });
});

import { vi } from "vitest";
import { sumarPuntuacion } from "./motor";

describe("sumarPuntuacion", () => {
  it("Debería sumar correctamente el valorPunto de la carta y devolver mensaje de puntosTotales", () => {
    //Arrange
    const puntos: number = 7;
    const partida = { puntosTotales: 0 };
    vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(5);
    const resultadoEsperado: number = 12;
    //Act
    const resultado = sumarPuntuacion(puntos);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

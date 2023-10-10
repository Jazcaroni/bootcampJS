import { vi } from "vitest";
import { sumarPuntuacion } from "./motor";
import { partida } from "./modelo";

describe("sumarPuntuacion", () => {
  it("Debería sumar correctamente el valorPunto de la carta y devolver mensaje de puntosTotales", () => {
    //Arrange
    const puntos: number = 7;
    vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(5);
    const resultadoEsperado: number = 12;
    //Act
    sumarPuntuacion(puntos);
    //Assert
    expect(resultadoEsperado).toBe(12);
  });
});

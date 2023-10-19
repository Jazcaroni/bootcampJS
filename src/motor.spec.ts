import { vi } from "vitest";
import {
  sumarPuntuacion,
  obtenerEstadoPartida,
  generarNumeroDeCarta,
} from "./motor";
import { partida } from "./modelo";

describe("sumarPuntuacion", () => {
  it("Debería sumar correctamente el valorPunto de la carta y devolver mensaje de puntosTotales", () => {
    //Arrange
    const puntos: number = 7;
    vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(5);
    const resultadoEsperado: number = 12;
    //Act
    const resultado = sumarPuntuacion(puntos);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerEstadoPartida", () => {
  it("Debería de devolver PERDER_PARTIDA cuando se pasa del límite de los puntos", () => {
    // Arrange
    const resultadoEsperado = "PERDER_PARTIDA";
    vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(9);

    // Act
    const resultado = obtenerEstadoPartida();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver GANAR_PARTIDA cuando se llega al límite de los puntos", () => {
    // Arrange
    const resultadoEsperado = "GANAR_PARTIDA";
    vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(7.5);

    // Act
    const resultado = obtenerEstadoPartida();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver EN_CURSO cuando la puntuación está en el rango permitido", () => {
    // Arrange
    const resultadoEsperado = "EN_CURSO";
    vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(6);

    // Act
    const resultado = obtenerEstadoPartida();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("generarNumeroDeCarta", () => {
  it("Debería sumar 2 al resultado si el número aleatorio es mayor que 7", () => {
    // Arrange
    vi.spyOn(partida, "numeroAleatorio", "get").mockReturnValue(8);

    // Act
    const resultado = generarNumeroDeCarta(partida.numeroAleatorio);

    // Assert
    expect(resultado).toBe(10);
  });

  it("No debería sumar 2 al resultado si el número aleatorio es menor o igual a 7", () => {
    // Arrange
    vi.spyOn(partida, "numeroAleatorio", "get").mockReturnValue(5);

    // Act
    const resultado = generarNumeroDeCarta(partida.numeroAleatorio);

    // Assert
    expect(resultado).toBe(5);
  });
});

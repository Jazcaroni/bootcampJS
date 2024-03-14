import {
  calcularNotaMedia,
  calcularNotaMediaAlumnos,
  FichaAlumno,
  Notas,
  calcularNotaFinal,
} from "./main";

describe("calcularNotaMedia", () => {
  it("deberia devolver la nota media de un alumno", () => {
    //Arrange
    const notas: number[] = [7, 8, 9];
    //Act
    const result = calcularNotaMedia(notas);
    //Assert
    const notaMedia = 8;
    expect(result).toEqual(notaMedia);
  });
  it("deberia devolver la nota media de un alumno", () => {
    //Arrange
    const notas: number[] = [6, 7, 8];
    //Act
    const result = calcularNotaMedia(notas);
    //Assert
    const notaMedia = 7;
    expect(result).toEqual(notaMedia);
  });
  it("deberia devolver la nota media de un alumno", () => {
    //Arrange
    const notas: number[] = [3, 2, 6];
    //Act
    const result = calcularNotaMedia(notas);
    //Assert
    const notaMedia = 3.67;
    expect(result).toEqual(notaMedia);
  });
});
describe("calcularNotaMediaAlumnos", () => {
  it("debería calcular la nota media de todos los alumnos", () => {
    //Arrange
    const fichaAlumnos: FichaAlumno[] = [
      {
        alumno: "Juan Pérez",
        notas: [7, 8, 9],
      },
      {
        alumno: "María López",
        notas: [6, 7, 8],
      },
    ];
    //Act
    const result = calcularNotaMediaAlumnos(fichaAlumnos);
    //Assert
    const notasMedias: Notas[] = [
      {
        alumno: "Juan Pérez",
        notaMedia: 8,
      },
      {
        alumno: "María López",
        notaMedia: 7,
      },
    ];
    expect(result).toEqual(notasMedias);
  });
});
describe("calcularNotaFinal", () => {
  it("deberñia devolver la nota final de un alumno", () => {
    //Arrange
    const notaMediaPracticas = 8;
    const notaMediaExamenes = 7;
    //Act
    const result = calcularNotaFinal(notaMediaPracticas, notaMediaExamenes);
    // Assert
    const notaFinal = 7.6;
    expect(result).toEqual(notaFinal);
  });
  it("deberñia devolver la nota final de un alumno", () => {
    //Arrange
    const notaMediaPracticas = 6;
    const notaMediaExamenes = 7;
    //Act
    const result = calcularNotaFinal(notaMediaPracticas, notaMediaExamenes);
    // Assert
    const notaFinal = 6.4;
    expect(result).toEqual(notaFinal);
  });
  it("deberñia devolver la nota final de un alumno", () => {
    //Arrange
    const notaMediaPracticas = 3;
    const notaMediaExamenes = 2;
    //Act
    const result = calcularNotaFinal(notaMediaPracticas, notaMediaExamenes);
    // Assert
    const notaFinal = 2.6;
    expect(result).toEqual(notaFinal);
  });
});

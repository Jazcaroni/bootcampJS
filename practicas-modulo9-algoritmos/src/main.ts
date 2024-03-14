export interface FichaAlumno {
  alumno: string;
  notas: number[];
}

export interface Notas {
  alumno: string;
  notaMedia: number;
}

export const calcularNotaMediaAlumnos = (
  fichaAlumno: FichaAlumno[]
): Notas[] => {
  const notasMedias: Notas[] = fichaAlumno.map((fichaAlumno: FichaAlumno) => {
    const notaMedia = calcularNotaMedia(fichaAlumno.notas);
    return {
      alumno: fichaAlumno.alumno,
      notaMedia,
    };
  });
  return notasMedias;
};

export const calcularNotaMedia = (notas: number[]): number => {
  const sumarNotas = notas.reduce((acc, nota) => acc + nota, 0);
  const notaMedia = sumarNotas / notas.length;
  const notaMediaRedondeada = Number(notaMedia.toFixed(2));
  return notaMediaRedondeada;
};

export interface FichaFinalAlumno {
  alumno: string;
  notasPracticas: number[];
  notasExamenes: number[];
}
export interface CalificacionesAlumno {
  alumno: string;
  notaFinal: number;
}

export const calcularCalificacionAlumnos = (
  fichaFinalAlumnos: FichaFinalAlumno[]
): CalificacionesAlumno[] => {
  const notasFinales: CalificacionesAlumno[] = fichaFinalAlumnos.map(
    (fichaFinalAlumno) => {
      const notaMediaPracticas = calcularNotaMedia(
        fichaFinalAlumno.notasPracticas
      );
      const notaMediaExamenes = calcularNotaMedia(
        fichaFinalAlumno.notasExamenes
      );
      const notaFinal = calcularNotaFinal(
        notaMediaPracticas,
        notaMediaExamenes
      );

      return {
        alumno: fichaFinalAlumno.alumno,
        notaFinal,
      };
    }
  );
  return notasFinales;
};

export const calcularNotaFinal = (
  notaMediaPracticas: number,
  notaMediaExamenes: number
): number => {
  const notaFinal = notaMediaPracticas * 0.6 + notaMediaExamenes * 0.4;
  const notaFinalRedondeada = Number(notaFinal.toFixed(2));
  return notaFinalRedondeada;
};

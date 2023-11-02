import { FiltroPeliculas, Pelicula, TipoGenero } from "./modelo";

export const filtrarPeliculasPorGenero = (
  peliculas: Pelicula[],
  genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculas = (
  peliculas: Pelicula[],
  filtro?: FiltroPeliculas
): Pelicula[] => {
  if (!filtro) return peliculas;
  switch (filtro.caracteristica) {
    case "genero":
      return filtrarPeliculasPorGenero(peliculas, filtro.genero);
    default:
      return peliculas;
  }
};

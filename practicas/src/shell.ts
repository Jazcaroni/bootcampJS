import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas(peliculas, {
    titulo: "Películas de Aventuras",
    filtro: { genero: "Aventura", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas más vistas",
    filtro: { caracteristica: "masVistas" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas con mejor calificación",
    filtro: { caracteristica: "calificacion" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas con premios",
    filtro: { caracteristica: "premios" },
  });
});

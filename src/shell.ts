import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas("Todas las Películas", peliculas);
});

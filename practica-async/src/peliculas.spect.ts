import { vi } from "vitest";
import { leePeliculas } from "./peliculas";
import Axios from "axios";
import { Movie } from "./model";

describe("leePeliculas", () => {
  it("Deberia devolver un array de peliculas si todo ha ido bien en servidor", async () => {
    //Arrange
    const peliculasMock: Movie[] = [
      {
        id: "1",
        title: "Iron Man",
        year: 2008,
        director: "Jon Favreau",
        description:
          "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        actors: ["1", "2", "3"],
        cover_url:
          "https://raw.githubusercontent.com/Lemoncode/bootcamp-js2/main/10-async/03-server-peliculas/assets/movies/iron-man.webp",
      },
    ];
    const axiosGetSpy = vi
      .spyOn(Axios, "get")
      .mockResolvedValue({ data: peliculasMock });
    //Act
    const result = leePeliculas();
    //Asset
    expect(result).toEqual(peliculasMock);
  });
});

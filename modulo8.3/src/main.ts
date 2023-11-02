//Prueba de concepto 1 - barajar las cartas
const barajarCartas = (memoriaCartasArray: InfoCarta[]): InfoCarta[] => {
  const memoriaAleatorio = memoriaCartasArray.sort(() => 0.5 - Math.random());
  return memoriaAleatorio;
};

interface InfoCarta {
  idFoto: number;
  img: string;
}
// Array de Cartas
const memoriaCartasArray: InfoCarta[] = [
  {
    idFoto: 1,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 4,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 5,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 6,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
  {
    idFoto: 1,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 4,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 5,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 6,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];
const memoriaAleatorio = barajarCartas(memoriaCartasArray);
console.log(memoriaAleatorio);

//Prueba de concepto 2 - Mostrar imagen y volver la carta

const carta = document.getElementById("carta");
if (carta && carta instanceof HTMLDivElement) {
  carta.addEventListener("click", (): void => {
    // Cambio la imagen carta al hacer click
    const imagen = carta.querySelector("img");
    if (imagen && imagen instanceof HTMLImageElement) {
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png";
    }
    carta.style.backgroundColor = "#b799fe";
  });
}
// Prueba de concepto 3 - Mostrar un Grid de cartass

//Prueba de concepto 4 - Mostrar segunda imagen y volver las dos cartas


//hacer funcion volteaCarta  que se  coloque el evento en el div y luego se crea la funcion 
// ejempl div onclick="voltearCarta()"

// const volteaCarta = carta

const volteaCarta = carta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png";
    (memoriaCartasArray: InfoCarta[]) => ;
  
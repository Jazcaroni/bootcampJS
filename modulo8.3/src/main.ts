//Prueba de concepto 1 - barajar las cartas
const barajarCaritas = (caritasArray: any) => {
  const caritasAleatorio = caritasArray.sort(() => 0.5 - Math.random());
  return caritasAleatorio;
};

const caritasArray = ["🐷", "🦉", "🦁", "🐓", "🐶", "🐝"];

const caritasAleatorio = barajarCaritas(caritasArray);
console.log(caritasAleatorio);

//Prueba de concepto 2 - Mostrar imagen y volver la carta

const volteaCarta = (divCarta: any) => {
  const imagen = document.querySelector("img");
  if (
    imagen instanceof HTMLImageElement &&
    divCarta instanceof HTMLDivElement
  ) {
    imagen.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
    divCarta.style.backgroundColor = "#b799fe";
  }
};

const divCarta = document.getElementById("divCarta");
if (divCarta instanceof HTMLDivElement) {
  divCarta.addEventListener("click", () => {
    volteaCarta(divCarta);
  });
}

//Prueba de concepto 3 - Mostrar un Grid de cartas
//en el html

// Prueba de concepto 4 - Mostrar segunda imagen y volver las dos cartas
let carta1BocaArriba: boolean = false;
let carta2BocaArriba: boolean = false;

const manejarClick = (
  divCarta: HTMLDivElement,
  imagenSrc: string,
  cartaBocaArriba: boolean
) => {
  if (!cartaBocaArriba) {
    const imagen: HTMLImageElement | null =
      divCarta.querySelector(".carta-img");
    if (imagen) {
      imagen.src = imagenSrc;
      divCarta.style.backgroundColor = "#b799fe";
      return true;
    }
  }
  return false;
};

const divCarta1 = document.getElementById("divCarta1");
if (divCarta1 instanceof HTMLDivElement) {
  divCarta1.addEventListener("click", () => {
    carta1BocaArriba = manejarClick(
      divCarta1,
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
      carta1BocaArriba
    );
  });
}

const divCarta2 = document.getElementById("divCarta2");
if (divCarta2 instanceof HTMLDivElement) {
  divCarta2.addEventListener("click", () => {
    carta2BocaArriba = manejarClick(
      divCarta2,
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
      carta2BocaArriba
    );
  });
}
// Prueba de concepto 5 - Mapear el DIV que contiene la carta con la posición del array de las cartas
/*Vamos a crear un array de cartas.
El array va a tener 2 cartas de cada foto.
Vamos a crear un div por cada carta.
A cada div le vamos a poner un atributo
con el indice del array de cartas que le corresponde.
Vamos a escuchar al evento click de los divs.
Dentro de cada div vamos a tener una imagen, y vamos a cambiar el src de la imagen.
Para hacer esto dentro de cada imagen vamos a tener un atributo  que va a tener el mismo índice que el div que la contiene.
Cuando el usuario pinche en el primer div, vamos a leer el atributo data-indice-id y vamos a saber que es la primera carta del array de cartas y mostraremos la imagen correspondiente.*/

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
    idFoto: 0,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 1,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 2,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 3,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 4,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 5,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
  {
    idFoto: 0,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 1,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 2,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 3,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 4,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 5,
    img: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];
const memoriaAleatorio: InfoCarta[] = barajarCartas([...memoriaCartasArray]);
console.log(memoriaAleatorio);

const cartasDivs = document.querySelectorAll<HTMLImageElement>(".cartas");

if (cartasDivs.length > 0) {
  cartasDivs.forEach((cartaDiv, index) => {
    cartaDiv.setAttribute("data-indice-id", index.toString());
    cartaDiv.addEventListener("click", () => {
      const indice = parseInt(
        cartaDiv.getAttribute("data-indice-id") || "0",
        10
      );
      if (memoriaAleatorio[indice]) {
        const imagenSrc: string = memoriaAleatorio[indice].img;
        cartaDiv.style.backgroundImage = `url(${imagenSrc})`;
        cartaDiv.style.backgroundColor = "#b799fe";
      }
    });
  });
}

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

import Axios from "axios";

interface Actor {
  id: string;
  name: string;
  bio: string;
  movies: string[];
  cover_url: string;
}

const leeActores = (): Promise<Actor[]> => {
  const promise = new Promise<Actor[]>((resolve) => {
    Axios.get("http://localhost:3000/actors").then((response) => {
      resolve(response.data);
    });
  });
  return promise;
};
leeActores().then((actors) => {
  console.log(actors);
});

const myRegex = /^imagen\..$/;

let resultado = myRegex.test("imagen.A");
console.log("imag", resultado);

resultado = myRegex.test("img");
console.log("img", resultado);

resultado = myRegex.test("holaImagen0");
console.log("holaImagen0", resultado);

const myRegex2 = /^[aeiouAEUOU].$/;

resultado = myRegex2.test("A0");
console.log("aeiou", resultado);
const regex = /.*línea.*/gm;

const texto = `
Linea 1: Hola, soy una línea de texto.
Linea 2: !Aquí hay otra línea!
Linea 3: Esta es la ultima línea
Linea 4: Esta no sale`;

const coincidencias = texto.match(regex);
console.log(coincidencias);

const estaBienFormadaLaIp = (value: string): boolean => {
  const myregexIp = /^.\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  return myregexIp.test(value);
};
const ipe = "124.0.12.6";

console.log(estaBienFormadaLaIp);

//grupo de 4 numero de 1 a 3 cifras c/u separacion de . entre ellos ejp 127.0.0.1

class Animal {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  hacerRuido() {
    return "Algún sonido";
  }
  duerme() {
    return "Zzzz";
  }
}

const paco = new Animal("Paco", 2);
console.log(paco.hacerRuido());
console.log(paco.duerme());

//  **********

class Gato extends Animal {
  raza: string;

  constructor(nombre: string, edad: number, raza: string) {
    super(nombre, edad);
    this.raza = raza;
  }
  hacerRuido(): string {
    return "Miau";
  }
}

const misiu = new Gato("Misiú", 5, "Bombay");
console.log(misiu.hacerRuido());
console.log(misiu);
console.log(misiu.duerme());

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🎼 Clásica";
const clasica = "🤘 Hard Rock";
const estiloNombre =
  "background-color: green; font-size: 18px; font-weight: bold"; //estilo fondo verde y negrita del nombre  del grupo

interface Grupomusical {
  nombreGrupo: string;
  cantante: string;
  compositor: string;
  año: number;
  activo: boolean;
  Género: string;
}

const grupoA: Grupomusical = {
  nombreGrupo: "The Beatles",
  año: 1960,
  activo: true,
  Género: popRock,
  cantante: "",
  compositor: "",
};

const grupoB: Grupomusical = {
  nombreGrupo: "Queen",
  año: 1970,
  activo: false,
  Género: rock,
  cantante: "",
  compositor: "",
};

const grupoC: Grupomusical = {
  nombreGrupo: "AC DC",
  año: 1973,
  activo: true,
  Género: hardRock,
  cantante: "",
  compositor: "",
};

const grupoD: Grupomusical = {
  compositor: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  Género: clasica,
  nombreGrupo: "",
  cantante: "",
};

const grupoE: Grupomusical = {
  nombreGrupo: "The Rolling Stones",
  año: 1962,
  activo: true,
  Género: rock,
  cantante: "",
  compositor: "",
};

console.log("%c" + grupoA.nombreGrupo, estiloNombre, grupoA);
console.log("%c" + grupoB.nombreGrupo, estiloNombre, grupoB);
console.log("%c" + grupoC.nombreGrupo, estiloNombre, grupoC);
console.log("%c" + grupoD.nombreGrupo, estiloNombre, grupoD);
console.log("%c" + grupoE.nombreGrupo, estiloNombre, grupoE);

//Prueba de concepto 1 - barajar las cartas
const barajarCaritas = (caritasArray: any) => {
  const caritasAleatorio = caritasArray.sort(() => 0.5 - Math.random());
  return caritasAleatorio;
};
const caritasArray = ["🐷", "🦉", "🦁", "🐓", "🐶", "🐝"];
const caritasAleatorio = barajarCaritas(caritasArray);
console.log(caritasAleatorio);

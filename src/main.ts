const anterior = (): void => {
  const elemento = document.getElementById("numero-turno");
  if (elemento && elemento instanceof HTMLElement) {
    let numeroActual: number = parseInt(elemento.innerText);
    const result: number | string = `${--numeroActual}`.padStart(2, "0");
    elemento.innerText = result;
  }
};
const siguiente = (): void => {
  const elemento = document.getElementById("numero-turno");
  if (elemento && elemento instanceof HTMLElement) {
    let numeroActual: number = parseInt(elemento.innerText);
    const result: number | string = `${++numeroActual}`.padStart(2, "0");
    elemento.innerText = result;
  }
};

const resert = (): void => {
  const elemento = document.getElementById("numero-turno");
  if (elemento && elemento instanceof HTMLElement) {
    elemento.innerText = "00";
  }
};

const botonSiguiente = document.getElementById("siguiente");
if (
  botonSiguiente !== null &&
  botonSiguiente !== undefined &&
  botonSiguiente instanceof HTMLButtonElement
) {
  botonSiguiente.addEventListener("click", siguiente);
}

const botonAnterior = document.getElementById("anterior");
if (
  botonAnterior !== null &&
  botonAnterior !== undefined &&
  botonAnterior instanceof HTMLButtonElement
) {
  botonAnterior.addEventListener("click", anterior);
}

const botonResetear = document.getElementById("resert");
if (
  botonResetear !== null &&
  botonResetear !== undefined &&
  botonResetear instanceof HTMLButtonElement
) {
  botonResetear.addEventListener("click", resert);
}

// Apartado A: IBAN de cuentas de bancos españoles, estén bien formados, validarlos y extraer información

function validarFormatoIBAN(iban: string): boolean {
  const ibanSinEspacios = iban.replace(/\s|-/g, "");
  const myRegexIBAN =
    /^ES\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/gm;
  return myRegexIBAN.test(ibanSinEspacios);
}

function analizarIBAN(iban: string): any {
  const ibanSinEspacios = iban.replace(/\s|-/g, "");
  const codigoBanco = ibanSinEspacios.substring(4, 8);
  const codigoSucursal = ibanSinEspacios.substring(8, 12);
  const codigoCuenta = ibanSinEspacios.substring(12, 20);

  const nombreBanco = obtenerNombreBanco(codigoBanco);

  return {
    IBAN: iban,
    banco: nombreBanco,
    sucursal: codigoSucursal,
    cuenta: codigoCuenta,
  };
}
// Función de obtener el nombre del banco a partir del código
function obtenerNombreBanco(codigoBanco: string): string {
  switch (codigoBanco) {
    case "2080":
      return "Abanca Corporación Bancaria";
    case "0061":
      return "Banca March";
    case "0188":
      return "Banco Alcalá";
    case "0182":
      return "Banco Bilbao Vizcaya Argentaria";
    case "0130":
      return "Banco Caixa Geral";
    case "0234":
      return "Banco Caminos";
    case "2105":
      return "Banco Castilla-La Mancha";
    case "0240":
      return "Banco de Crédito Social Cooperativo";
    case "0081":
      return "Banco de Sabadell";
    case "0487":
      return "Banco Mare Nostrum";
    case "0186":
      return "Banco Mediolanum";
    case "0238":
      return "Banco Pastor";
    case "0075":
      return "Banco Popular Español";
    case "0049":
      return "Banco Santander";
    case "3873":
      return "Banco Santander Totta";
    case "2038":
      return "Bankia";
    case "0128":
      return "Bankinter";
    case "0138":
      return "Bankoa";
    case "0152":
      return "Barclays Bank PLC";
    case "3842":
      return "BNP Paribas Paris";
    case "3025":
      return "Caixa de Credit del Enginyers";
    case "2100":
      return "Caixabank";
    case "2045":
      return "Caja de Ahorros y Monte de Piedad de Ontinyent";
    case "3035":
      return "Caja Laboral Popular CC";
    case "3081":
      return "Caja Rural Castilla-La Mancha3058 Cajamar Caja Rural";
    case "2000":
      return "Cecabank";
    case "1474":
      return "Citibank Europe PLC";
    case "3821":
      return "Commerzbank AG";
    case "3877":
      return "Danske Bank A/S";
    case "0019":
      return "Deutsche Bank SAE";
    case "0239":
      return "EVO Banco";
    case "2085":
      return "Ibercaja Banco";
    case "1465":
      return "ING Bank NV";
    case "2095":
      return "Kutxabank";
    case "2048":
      return "Liberbank";
    case "0131":
      return "Novo Banco";
    case "0073":
      return "Open Bank";
    case "0108":
      return "Société Générale";
    case "2103":
      return "Unicaja Banco";
    case "0030":
      return "Banco Español de Crédito";
    default:
      return "Desconocido";
  }
}

// Función de procesar las reservas bancarias
function procesarReservasBancarias(reservas: string[]): any[] {
  const reservasProcesadas: any[] = [];

  reservas.forEach((reserva) => {
    if (validarFormatoIBAN(reserva)) {
      const reservaAnalizada = analizarIBAN(reserva);
      reservasProcesadas.push(reservaAnalizada);
    } else {
      console.log(`El formato del IBAN ${reserva} no es válido.`);
    }
  });

  return reservasProcesadas;
}
// Función de mostrar el resultado en el HTML
function mostrarResultado(resultado: any[]) {
  const resultadoDiv = document.getElementById("resultado");
  if (
    resultadoDiv !== null &&
    resultadoDiv !== undefined &&
    resultadoDiv instanceof HTMLElement
  ) {
    resultadoDiv.innerHTML = "";

    resultado.forEach((reserva) => {
      const divReserva = document.createElement("div");
      divReserva.innerHTML = `
      <p>IBAN: ${reserva.IBAN}</p>
      <p>Banco: ${reserva.banco}</p>
      <p>Sucursal: ${reserva.sucursal}</p>
      <p>Cuenta: ${reserva.cuenta}</p>
      <hr>
    `;
      resultadoDiv.appendChild(divReserva);
    });
  }
}
// Obteniendo elementos del DOM
const txtIban = document.getElementById("txtIban") as HTMLInputElement;
const btnComprobar = document.getElementById(
  "btnComprobar"
) as HTMLButtonElement;

// Evento al botón Comprobar
btnComprobar.addEventListener("click", () => {
  const iban = txtIban.value.trim();
  const reservasProcesadas = procesarReservasBancarias([iban]);
  mostrarResultado(reservasProcesadas);
});
/**********************************************/
//Apartado B
//Crea una aplicación con un textarea y un botón de "extraer enlaces a imágenes".

function extraerTagImg(html: string): string[] {
  const myRegexTagImg = /<img[^>]+src="([^">]+)"/g;
  const enlaces: string[] = [];
  let match;

  while ((match = myRegexTagImg.exec(html)) !== null) {
    enlaces.push(match[1]);
  }

  return enlaces;
}

// Obtener elementos del DOM
const txtImg = document.getElementById("txtImg") as HTMLTextAreaElement;
const btnExtraerImg = document.getElementById(
  "btnExtraerImg"
) as HTMLButtonElement;
const resultadoImg = document.getElementById("resultadoImg");

// Función para manejar el clic en el botón "Extraer Imágenes"
btnExtraerImg.addEventListener("click", () => {
  const html = txtImg.value;
  const enlacesImagenes = extraerTagImg(html);
  mostrarEnlacesImagenes(enlacesImagenes);
});

// Función para mostrar los enlaces a imágenes en pantalla
function mostrarEnlacesImagenes(enlaces: string[]): void {
  if (resultadoImg) {
    resultadoImg.innerHTML = "";

    enlaces.forEach((enlace) => {
      const imagen = document.createElement("img");
      imagen.src = enlace;
      resultadoImg.appendChild(imagen);
    });
  }
}

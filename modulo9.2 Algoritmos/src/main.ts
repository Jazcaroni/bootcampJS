/* 
En el proceso que de creación de una cuenta queremos evitar que el usuario puede crear una clave débil, para ellos nos piden que:

La clave debe de tener mayúsculas y minúsculas.
La clave debe de tener números.
La clave debe de tener caracteres especiales (@,#,+, _, ...)
La clave debe de tener una longitud mínima de 8 caracteres.
La clave no debe tener el nombre del usuario.
La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
En la firma debemos de evaluar si pasa o no, y también devolver un tipo de error indicando donde ha fallado


*/

const commonPasswords: string[] = [
  "Psldfkd123@",
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

/* 


Nos crearemos una función para validar la clave, que nos devolverá un objeto con dos propiedades:

esValida: booleano que nos indica si la clave es válida o no.
error: string que nos indica el error que ha ocurrido.
Vamos a crear un interfaz para la salida de la función:

*/

interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

/* 

Lo siguiente que vamos a hacer, es ir analizando cada una de las condiciones, para que nuestra clave sea válida:

Pistas:

Si la clave no tiene mayúsculas y minúsculas, el error será: "La clave debe de tener mayúsculas y minúsculas".
Si la clave no tiene números, el error será: "La clave debe de tener números".
Si la clave no tiene caracteres especiales, el error será: "La clave debe de tener caracteres especiales".
Si la clave no tiene una longitud mínima de 8 caracteres, el error será: "La clave debe de tener una longitud mínima de 8 caracteres".
Si la clave tiene el nombre del usuario, el error será: "La clave no debe tener el nombre del usuario".
Si la clave tiene palabras comunes, el error será: "La clave no debe de contener palabras comunes".*/
//La clave debe de tener mayúsculas y minúsculas.

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let tieneMayuscula = false;
  let tieneMinuscula = false;

  clave.split("").forEach((caracter) => {
    if (caracter >= "A" && caracter <= "Z") {
      tieneMayuscula = true;
    } else if (caracter >= "a" && caracter <= "z") {
      tieneMinuscula = true;
    }
  });

  if (tieneMayuscula && tieneMinuscula) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas.",
    };
  }
};

//La clave debe de tener números.
const tieneNumeros = (clave: string): ValidacionClave => {
  if (clave.split("").some((caracter) => !isNaN(parseInt(caracter)))) {
    return { esValida: true };
  } else {
    return { esValida: false, error: "La clave debe de tener números." };
  }
};
//La clave debe de tener caracteres especiales (@,#,+, _, ...)
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = ["@", "#", "+", "-", "?"];
  if (
    clave.split("").some((caracter) => caracteresEspeciales.includes(caracter))
  ) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales.",
    };
  }
};
//La clave debe de tener una longitud mínima de 8 caracteres.
const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const longitudMinima = 8;
  if (clave.length >= longitudMinima) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe tener una longitud minima de 8 caracteres",
    };
  }
};
//La clave no debe tener el nombre del usuario.
const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario.",
    };
  }
};

//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (
    !commonPasswords.some((common) =>
      clave.toLocaleLowerCase().includes(common.toLocaleLowerCase())
    )
  ) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes.",
    };
  }
};
/*const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (commonPasswords.includes(clave.toLowerCase())) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes.",
    };
  } else {
    return { esValida: true };
  }
}; */
/*Una vez que tenemos todas las funciones, ya estamos listos para crear la función validarClave que nos devolverá un objeto con dos propiedades:

esValida: booleano, que nos indica si la clave es válida o no.
error: string, que nos devolverá el primer error que encuentre, en caso de que tuviera.

*/

// Firma de la función
const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  let error: string | undefined;

  switch (false) {
    case tieneMayusculasYMinusculas(clave).esValida:
      error = tieneMayusculasYMinusculas(clave).error;
      break;
    case tieneNumeros(clave).esValida:
      error = tieneNumeros(clave).error;
      break;
    case tieneCaracteresEspeciales(clave).esValida:
      error = tieneCaracteresEspeciales(clave).error;
      break;
    case tieneLongitudMinima(clave).esValida:
      error = tieneLongitudMinima(clave).error;
      break;
    case !tieneNombreUsuario(nombreUsuario, clave).esValida:
      error = "La clave no debe tener el nombre del usuario.";
      break;
    case !tienePalabrasComunes(clave, commonPasswords).esValida:
      error = "La clave no debe de contener palabras comunes.";
      break;
  }

  if (error) {
    console.log("La contraseña no es válida:", error);
    return { esValida: false, error };
  } else {
    console.log("La contraseña es válida.");
    return { esValida: true };
  }
};

console.log("Comprobando las funciones con el array commonPasswords:");

commonPasswords.forEach((password) => {
  console.log(`\nComprobando contraseña: ${password}`);

  console.log("Mayúsculas y minúsculas:", tieneMayusculasYMinusculas(password));
  console.log("Números:", tieneNumeros(password));
  console.log("Caracteres especiales:", tieneCaracteresEspeciales(password));
  console.log("Longitud mínima:", tieneLongitudMinima(password));
  console.log(
    "Nombre de usuario:",
    tieneNombreUsuario("exampleUser", password)
  );
  console.log(
    "Palabras comunes:",
    tienePalabrasComunes(password, commonPasswords)
  );
});

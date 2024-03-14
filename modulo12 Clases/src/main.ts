// Laboratorio 12 clases
/* Imaginemos que tenemos una web de reservas de hotel. Cuando un cliente realiza sus reservas indica los siguientes datos:

Qué habitaciones quiere (hay de varios tipos).
Para cada habitación, cuántas personas la van a ocupar.
Además, debemos saber que el tipo de IVA que aplica a las habitaciones de hotel es del 21%.

Un ejemplo de datos de nuestro hotel sería el siguiente: */

/* Nuestro objeto es calcular el subtotal (precio sin IVA) y el total de las reservas que ha hecho un cliente.
Desafío
Crear una clase base con la funcionalidad común, y dos clases hijas una con el caso para cliente particular y otra para tour operador.

En el constructor de la clase base, introduce la lista de precios de habitaciones, ¿Qué tendrás que hacer para que en el hijo puedas inicializar la clase?

Algunas pistas:

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/super

Caso 1
En el caso de un cliente particular:

Habitación / día (IVA No Incluido):
Standard: 100 €.
Suite: 150 €.
Cargos adicionales:
Por cada persona adicional sumarle 40 € al precio de cada noche.
IVA sumarle un 21% al total.
Crear una clase que reciba la lista de reservas y calcule el subtotal y el total teniendo en cuenta los anteriores requisitos.
  */
class Reserva {
  // clase base reservas
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
  desayuno: any;

  constructor(
    tipoHabitacion: "standard" | "suite",
    pax: number,
    noches: number
  ) {
    this.tipoHabitacion = tipoHabitacion;
    this.pax = pax;
    this.noches = noches;
  }
}
class CalculaReservas {
  // clase base para calcular reservas
  reservas: Reserva[];
  subtotal: number; // subtotal sin iva

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.subtotal = 0;
  }

  // Calcular subtotal sin IVA
  subtotalCalcula(): void {
    this.subtotal = 0;
    for (const reserva of this.reservas) {
      let precioNoche = reserva.tipoHabitacion === "standard" ? 100 : 150;
      precioNoche += (reserva.pax - 1) * 40; // persona adicional
      this.subtotal += precioNoche * reserva.noches;
    }
  }
  // Calcular total con IVA
  calcularTotal(): number {
    this.subtotalCalcula();
    const iva = this.subtotal * 0.21;
    return this.subtotal + iva;
  }
}

// Array reservas caso 1
const reservas = [
  new Reserva("standard", 1, 3),
  new Reserva("standard", 1, 4),
  new Reserva("suite", 2, 1),
];
// Calculo caso 1
const calcular = new CalculaReservas(reservas);
calcular.subtotalCalcula();
console.log("Subtotal", calcular.subtotal);
console.log("Total", calcular.calcularTotal());

/* Caso 2
Cubrimos el caso de un tour operador, al reservar grandes volúmenes, le damos las siguientes condiciones especiales:

Todas las habitaciones tienen el mismo precio (100 €).
Adicionalmente se le aplica un 15 % de descuento a los servicios contratados.
Crear una clase que herede de la primera que cubra el caso del cálculo de totales y subtotales para el tour operador.
 */
// Clase caso 2
class CalculaReservasTourOperador extends CalculaReservas {
  constructor(reservas: Reserva[]) {
    super(reservas);
  }
  // Calculo para aplicar descuento
  calcularTotal(): number {
    this.subtotalCalcula();
    const descuento = this.subtotal * 0.15;
    const total = this.subtotal - descuento;
    const iva = total * 0.21;
    return total + iva;
  }
}
// Array caso2
const reservasTourOperador = [
  new Reserva("standard", 1, 3),
  new Reserva("standard", 1, 4),
  new Reserva("suite", 2, 1),
];
// Caluclo Subtotal y total
const calcularTourOperador = new CalculaReservasTourOperador(
  reservasTourOperador
);
calcularTourOperador.subtotalCalcula(); // Calcula el subtotal para el tour operador
console.log("Subtotal (Tour Operador):", calcularTourOperador.subtotal);
console.log("Total (Tour Operador):", calcularTourOperador.calcularTotal());
/* 

Ejercicio adicional
Añadimos un campo a cada reserva en el que indicamos si el desayuno está incluido o no: en caso de estar incluido supone un cargo adicional de 15 € por persona y noche.

Calcular totales y subtotales tanto para tarifa particular como tour operador.
*/
//Clase para ejercicio adicional desayuno
class ReservaDesayuno extends Reserva {
  desayuno: boolean;

  constructor(
    tipoHabitacion: "standard" | "suite",
    desayuno: boolean,
    pax: number,
    noches: number
  ) {
    super(tipoHabitacion, pax, noches);
    this.desayuno = desayuno;
  }
}

class CalculaReservasConDesayuno extends CalculaReservas {
  constructor(reservas: ReservaDesayuno[]) {
    super(reservas);
  }

  subtotalCalcula(): void {
    this.subtotal = 0;
    for (const reserva of this.reservas) {
      let precioNoche = reserva.tipoHabitacion === "standard" ? 100 : 150;
      precioNoche += (reserva.pax - 1) * 40; // persona adicional
      if (reserva.desayuno) {
        precioNoche += reserva.pax * 15; // Cargo adicional por desayuno
      }
      this.subtotal += precioNoche * reserva.noches;
    }
  }
}

const reservasConDesayuno: ReservaDesayuno[] = [
  new ReservaDesayuno("standard", false, 1, 3),
  new ReservaDesayuno("standard", false, 1, 4),
  new ReservaDesayuno("suite", true, 2, 1),
];
const calcularConDesayuno = new CalculaReservasConDesayuno(reservasConDesayuno);
calcularConDesayuno.subtotalCalcula();
console.log("Subtotal (Con Desayuno):", calcularConDesayuno.subtotal);
console.log("Total (Con Desayuno):", calcularConDesayuno.calcularTotal());

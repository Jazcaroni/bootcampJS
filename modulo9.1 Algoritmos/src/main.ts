import { LineaTicket, productos } from "./modelo";
import { calculaTicket } from "./ticket-compra";

const lineasTicket: LineaTicket[] = [
  {
    producto: productos[0].producto,
    cantidad: 2,
  },
  {
    producto: productos[1].producto,
    cantidad: 3,
  },
  {
    producto: productos[2].producto,
    cantidad: 6,
  },
  {
    producto: productos[3].producto,
    cantidad: 1,
  },
];

const ticket = calculaTicket(lineasTicket);

console.log(ticket);

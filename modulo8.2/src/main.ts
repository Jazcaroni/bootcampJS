//Laboratorio Bucles
type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];
// Apartado Obligatorio
//a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatra = pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
  return pacientesPediatra;
};
const pacientesPediatra = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatra);

//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatriaMenoresDiez = pacientes.filter(
    (paciente: Pacientes) =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
  return pacientesPediatriaMenoresDiez;
};
const pacientesPediatriaMenoresDiez =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesPediatriaMenoresDiez);

//c)Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

//Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente) => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100
  ); // no estoy segura si some se debe aplicar aqui porque se pide que se cumplan las dos condiciones no una sola
};
const debeActivarProtocolo = activarProtocoloUrgencia(pacientes);
console.log(debeActivarProtocolo);

//d)El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const nuevosPacientes = pacientes.map((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    }
    return paciente;
  });
  return nuevosPacientes;
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log(pacientesReasignados);
//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const indicePediatria = pacientes.findIndex(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return indicePediatria !== -1;
};

const pacientesParaElPediatra = HayPacientesDePediatria(pacientes);
console.log(pacientesParaElPediatra);

// Apartado Opcional
//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const recuentoDePacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Medico de familia") {
      recuentoDePacientes.medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      recuentoDePacientes.pediatria++;
    } else if (paciente.especialidad === "Cardiólogo") {
      recuentoDePacientes.cardiologia++;
    }
  });

  return recuentoDePacientes;
};

const todosPacientes = cuentaPacientesPorEspecialidad(pacientes);
console.log(todosPacientes);

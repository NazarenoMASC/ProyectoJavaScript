// var miArray = [];
// var cantidad = 0;
// var calificaciones = [];
// cantidad = prompt("Ingrese cantidad de alumnos");

// for (var i = 0; i < cantidad; i++) {
//   var name = prompt("Introduce un nombre del alumno");
//   miArray.push(name);
// }

// miArray.forEach((elemento) => {
//   document.write(elemento);
// });

const materias = {
  fisica: ["Perez", "Pedro", "Nazareno", "Elian", "Maria"], // el primer nombre es el profesor
  programacion: ["Gonzalez", "Pedro", "Juan", "Nazareno"],
  logica: ["Hernandez", "Pedro", "Juan", "Nazareno", "Elian", "Maria"],
  quimica: ["Rodriguez", "Pedro", "Juan", "Nazareno", "Elian", "Maria"],
};

const obtenerInformacion = (materia) => {
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia);

  if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: ${profesor}<br>
		Los alumnos son: ${alumnos}<br><br>
		`);
  }
};

const cantidadDeClases = (alumno) => {
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for (info in informacion) {
    if (informacion[info].includes(alumno)) {
      cantidadTotal++;
      clasesPresentes.push(" " + info);
    }
  }
  return `${alumno} está en ${cantidadTotal} clases: ${clasesPresentes} <br>
	`;
};

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("Nazareno"));
document.write(cantidadDeClases("Pedro"));

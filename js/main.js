let n1;
let n2;

const sumar = (n1, n2) => {
  return parseFloat(n1) + parseFloat(n2);
};
const restar = (n1, n2) => {
  return parseFloat(n1) - parseFloat(n2);
};
const concatenar = (n1, n2) => {
  return (resultado = n1.concat(n2));
};
const dividir = (n1, n2) => {
  return parseFloat(n1) / parseFloat(n2);
};
const CalcularPorcentaje = (n1, n2) => {
  return (n1 * 100) / n2;
};

alert("Que operacion desea realizar?");
let operacion = prompt(
  "1: suma, 2: resta, 3: concatenar, 4: dividir, 5: Sacar el porcentaje"
);

if (operacion == 3) {
  n1 = prompt("Ingrese primer palabra");
  n2 = prompt("Ingrese segunda palabra");

  alert(` el resultado es ` + concatenar(n1, n2));
} else if (operacion == 5) {
  n1 = prompt("Ingrese numero");
  n2 = prompt("Ingrese el porcentaje de ese numero");
  let resultado = CalcularPorcentaje(n1, n2);
  alert(` el ${n2}% de ${n1} es ${resultado}`);
} else {
  n1 = prompt("Ingrese primer numero");
  n2 = prompt("Ingrese segundo numero");
}

if (operacion == 1) {
  let resultado = sumar(n1, n2);
  alert(` el resultado de la suma es ${resultado}`);
} else if (operacion == 2) {
  let resultado = restar(n1, n2);
  alert(` el resultado de la resta es ${resultado}`);
} else if (operacion == 4) {
  let resultado = dividir(n1, n2);
  alert(` el resultado de la división es ${resultado}`);
}

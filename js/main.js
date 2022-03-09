let n1;
let n2;
let operacion = 0;

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

while (operacion !== "n") {
  alert("Que operacion desea realizar?");
  operacion = prompt(
    "1: suma, 2: resta, 3: concatenar, 4: dividir, 5: Sacar el porcentaje. <br> Presione n para cancelar"
  );

  if ((operacion == 3) & (operacion !== "n")) {
    n1 = prompt("Ingrese primer palabra");
    n2 = prompt("Ingrese segunda palabra");

    alert(` el resultado es ` + concatenar(n1, n2));
  } else if ((operacion == 5) & (operacion !== "n")) {
    n1 = prompt("Ingrese numero");
    n2 = prompt("Ingrese el porcentaje de ese numero");
    let resultado = CalcularPorcentaje(n1, n2);
    alert(` el ${n2}% de ${n1} es ${resultado}`);
  } else if ((operacion == 1) & (operacion !== "n")) {
    n1 = prompt("Ingrese primer numero");
    n2 = prompt("Ingrese segundo numero");
    let resultado = sumar(n1, n2);
    alert(` el resultado de la suma es ${resultado}`);
  } else if ((operacion == 2) & (operacion !== "n")) {
    n1 = prompt("Ingrese primer numero");
    n2 = prompt("Ingrese segundo numero");
    let resultado = restar(n1, n2);
    alert(` el resultado de la resta es ${resultado}`);
  } else if ((operacion == 4) & (operacion !== "n")) {
    n1 = prompt("Ingrese primer numero");
    n2 = prompt("Ingrese segundo numero");
    let resultado = dividir(n1, n2);
    alert(` el resultado de la división es ${resultado}`);
  }
}

let i;
let n = new Number();
let precio = new Number();
let precioTotal = new Number();
function acumulador() {
  precio = Number(prompt("Ingrese el precio del producto"));
  precioTotal = precioTotal + precio;
}

n = Number(prompt("Ingrese el numero de productos"));

if (n <= 0) {
  while (n <= 0) {
    n = Number(prompt("Ingrese un numero valido de productos"));
  }
}

for (i = 1; i <= n; i++) {
  acumulador();
}
alert("el precio total del producto es " + precioTotal);

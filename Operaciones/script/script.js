const input = document.querySelector(".numberInput");
const operacionElegida = document.querySelector("select");
const para = document.querySelector("p");

const cuadrado = function (numero) {
  return numero ** 2;
};

const cubo = function (numero) {
  return (numero *= numero ** 2);
};

const factorial = function (numero) {
  var x = numero;
  while (x > 1) {
    numero *= x - 1;
    x--;
  }
  return numero;
};

const calcularOperacionElegida = function (operacion, valor) {
  let resultado = 0;

  operacion === "cuadrado"
    ? (resultado = cuadrado(valor))
    : operacion === "cubo"
    ? (resultado = cubo(valor))
    : operacion === "factorial"
    ? (resultado = factorial(valor))
    : (resultado = "No ingreso un valor en la entrada");
  para.textContent = resultado;
};

operacionElegida.addEventListener("change", function () {
  calcularOperacionElegida(operacionElegida.value, input.value);
});

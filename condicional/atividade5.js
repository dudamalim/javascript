const prompt = require("prompt-sync")();
let salario = prompt("qual é o seu salário?");
let salarial1 = salario * 0.075;
let salarial2 = salario * 0.15;
let salarial3 = salario * 0.225;
let salarial4 = salario * 0.275;

if (salario <= 2112) {
  console.log("você esta isento");
} else if (salario >= 2112.01 && salario <= 2826.65) {
  console.log(salarial1 + "deverá pagar 7.5%");
} else if (salario >= 2826.66 && salario <= 3751.05) {
  console.log(salarial2 + "deverá pagar 15%");
} else if (salario >= 3751.06 && salario <= 4664.68) {
  console.log(salarial3 + "deverá pagar 22.5%");
} else if (salario >= 4664.68) {
  console.log(salarial4 + "deverá pagar 27.5%");
}

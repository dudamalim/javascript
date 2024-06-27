const prompt = require("prompt-sync")();
let nota1 = Number(prompt("qual a sua primeira nota?"));
let nota2 = Number(prompt("qual a sua segunda nota?"));
let nota3 = Number(prompt("qual a sua terceira nota?"));
let resultado = (nota1 + nota2 + nota3) / 3;

if (resultado < 4) {
  console.log("reprovado");
} else if (resultado < 7) {
  console.log("recuperação");
} else {
  console.log("aprovado");
}

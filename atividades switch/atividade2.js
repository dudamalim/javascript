const prompt = require("prompt-sync")();
let nota = Number(prompt("qual é a sua nota?: ").trim());

switch (true) {
  case nota <= 10 && nota >= 7:
    console.log("aprovado");
    break;
  case nota <= 6 && nota >= 4:
    console.log("recuperação");
    break;
  default:
    console.log("reprovado");
}

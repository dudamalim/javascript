const prompt = require("prompt-sync")();
let nota1 = Number(prompt("qual a sua nota?"));
let nota2 = Number(prompt("qual a sua nota?"));
let nota3 = Number(prompt("qual a sua nota?"));
let resultado = (nota1 + nota2 + nota3) / 3;
console.log(resultado);

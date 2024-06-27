const prompt = require("prompt-sync")();
let pergunta = Number(prompt("qual é a sua idade: "));

if (pergunta >= 18) {
  console.log("você está apto a dirigir");
} else {
  console.log("você não esta apto a dirigir");
}

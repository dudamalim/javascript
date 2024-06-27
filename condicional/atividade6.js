const prompt = require("prompt-sync")();
let ano = Number(prompt("digite um ano: "));
if (ano % 4 == 0 && ano % 100 != 1) {
  console.log("é um ano bissexto");
} else if (ano / 400 == 0) {
  console.log("é um ano bissexto");
} else {
  console.log("é um ano comum");
}

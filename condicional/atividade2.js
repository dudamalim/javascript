const prompt = require("prompt-sync")();
let usuario = prompt("qual o seu usuario?");
let senha = prompt("digite a sua senha: ");
if (usuario == "malim" && senha == "malim123") {
  console.log("acesso liberado");
} else {
  console.log("acesso negado");
}

const prompt = require("prompt-sync")();
let direção1 = prompt("qual direção você quer ir?");
if (direção1 == "direita") {
  console.log("você esta indo para a direita");
} else if (direção1 == "esquerda") {
  console.log("você esta indo para a esquerda");
} else if (direção1 == "frente") {
  console.log("você esta indo para frente");
} else if (direção1 == "tras") {
  console.log("você esta indo para tras");
}

const prompt = require("prompt-sync")();
let temp1 = Number(prompt("qual a temperatura em celsius?"));
let temp2 = temp1 * 1.8 + 32;
console.log(temp2);

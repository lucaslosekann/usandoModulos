const { calculaIdade, calculaIMC } = require('./funcoes');

const anoNasc = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

console.log(`A idade calculada é: ${calculaIdade(anoNasc)}`);
console.log(`O IMC calculado é: ${calculaIMC(peso, altura)}`);
// Os métodos se aplicam ao tipo de dado Number, que são valores numéricos.

let numero1 = "45.8";

// Transformar em número inteiro
console.log(parseInt(numero1));

// Transformar em número real
console.log(parseFloat(numero1));

// Transformar em número sem forçar inteiro ou real
console.log(Number(numero1));

// Limitar o número de casas decimais
let numero2 = 6.2689548;
console.log(numero2.toFixed(2));
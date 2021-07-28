// Parâmetros são valores que podem ser usados dentro da função. Nesse exemplo, temos uma função que recebe como parâmetros 2 números, e exibe a soma deles.
function somaDoisNumeros(num1, num2) {
  console.log(`Soma dos números: ${num1 + num2}`);
};

let numero1 = Number(prompt("Digite um número"));
let numero2 = Number(prompt("Digite outro número"));

// Aqui passamos as 2 variáveis como parâmetros da função.
somaDoisNumeros(numero1, numero2);
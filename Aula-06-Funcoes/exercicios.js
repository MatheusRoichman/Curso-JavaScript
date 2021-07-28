// Calculadora das 4 operações básicas com 2 valores.

const soma = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;

function perguntarOperacao() {
  let resposta = prompt("Qual operação você deseja?");

  if (resposta === "soma") {
    let num1 = Number(prompt("Digite um número:"));
    let num2 = Number(prompt("Digite outro número:"));
    console.log(soma(num1, num2));
  } else if (resposta === "subtração" || resposta === "subtracao") {
    let num1 = Number(prompt("Digite um número:"));
    let num2 = Number(prompt("Digite outro número:"));
    console.log(sub(num1, num2));
  } else if (resposta === "multiplicação" || resposta === "multiplicacao") {
    let num1 = Number(prompt("Digite um número:"));
    let num2 = Number(prompt("Digite outro número:"));
    console.log(mult(num1, num2));
  } else if (resposta === "divisão" || resposta === "divisao") {
    let num1 = Number(prompt("Digite um número:"));
    let num2 = Number(prompt("Digite outro número:"));
    console.log(div(num1, num2));
  } else {
    alert("Operação inválida!");
    perguntarOperacao();
  };
};

perguntarOperacao();
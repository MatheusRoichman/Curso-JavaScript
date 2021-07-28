let numero = Number(prompt("Digite um número"));

if (numero > 10) {
  console.log(`${numero} é maior que 10`);
} else if (numero === 10) {
  console.log(`${numero} é igual a 10`);
} else {
  console.log(`${numero} é menor que 10`);
};

// Fugindo de uma simples comparação de "se isso: faça isso, senão: faça aquilo", o else if permite que sejam realizados mais testes condicionais dentro dessa condicional.
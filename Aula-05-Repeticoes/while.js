let numero = parseInt(prompt("Digite um número"));

if (numero === 100) {
  console.log(numero);
} else if (numero < 100) {
  while (numero <= 100) {
    console.log(numero);
    numero++;
  }
} else {
  while (numero >= 100) {
    console.log(numero);
    numero -= 10;
  }
}

// Loop while: verifica a condição e, enquanto ela for verdadeira, executa uma ação.
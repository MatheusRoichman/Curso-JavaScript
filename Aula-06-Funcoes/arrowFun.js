// Arrow function é uma sintaxe simplificada para escrever funções. Veja a mesma função escrita de cada modo:

// Tradicional
function divide(num1, num2) {
  return num1 / num2;
}

// Guardando a função numa constante
const divide2 = function(num1, num2) {
  return num1 / num2;
}

// Arrow Function
// Primeiro, colocamos entre parênteses os parâmetros da função. Se não necessário, deixamos eles vazios.
// Depois, fazemos uma seta (=>) e abrimos chaves. Dentro dessas chaves, botamos as ações a serem executadas pela função.
const dividirDois = (num1, num2) => {
  if (num1 < num2) {
    return "Divisão inválida";
  } else {
    return num1 / num2;
  }
}
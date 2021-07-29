// Os métodos de String se aplicam ao tipo de dado String, que são cadeias de caracteres.

// Transformar um dado para string (2 formas)
let numero = 32.5;

console.log(numero.toString());
console.log(String(numero);

// Comprimento (quantidade de caracteres) de uma string
let texto = "UM texto";
console.log(texto.length);

// String em caracteres minúsculos
console.log(texto.toLowerCase());

// String em caracteres maiúsculos
console.log(texto.toUpperCase());

// Trocando a primeira ocorrência de uma substring por outra substring. No exemplo, trocamos o primeiro T da String texto por um S
console.log(texto.replace('t', 's'));
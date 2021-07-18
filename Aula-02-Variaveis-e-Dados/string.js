/*
O tipode dado String se refere a uma cadeia de caracteres  Gerlamente uma frase, palavra, etc.
A cadeia de caracteres tem que ser delimitada com aspas simples, aspas duplas ou crase.
Há diferença nesses usos!!
*/

let str1 = 'String 1';
let str2 = "String 2";
let str3 = `String 3`;

// Podemos adicionar o valor de uma variável com 2 meios. Exemplos:
let diaDeHoje = 18;

// Concatenação ("Somando" os textos);
console.log("O dia de hoje é: " + diaDeHoje);

// String literals. Nesse caso, usamos a delimitação com crase e, para exibir o valor da variável, usamos ${} e colocamos o identificador da variável entre as chaves. Isso torna o código mais legível.
console.log(`O dia de hoje é:  ${diaDeHoje}`);
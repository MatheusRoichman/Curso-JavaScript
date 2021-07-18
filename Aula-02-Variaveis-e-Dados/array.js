/*
Object tem vários valores internos, e um dos mais importantes é o Array. Array é uma estrutura de dados que armazena uma lista de itens, dos quais a posição é definida por índices.
IMPORTANTE: A contagem dos índices começa do 0, logo o primeiro item está na posição 0, o segundo na posição 1, etc.
*/

// Um array literal é definido com colchetes, e seus itens separados por vírgula
let arr1 = [
  3,
  8,
  "Algo",
  true
];

// Acessamos um determinado item no array colocando o índice dele entre colchetes após o identificador do array.

// Como Array é um valor interno de Object, o typeof retornará Object.
console.log(arr1[2], typeof arr1);
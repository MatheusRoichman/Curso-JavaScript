// Array é uma estrutura de dados. Podemos guardar vários dados de qualquer tipo dentro de um array. Os itens são organizados por posições numéricas.

// Declaração formal
let lista = new Array();

// Declaração literal
let lista2 = ["Item 1", 2, true];

// Acessamos um item do array por sua posição. O posicionamento começa do 0, ou seja, o primeiro item estará na posição 0.
console.log(lista2);
console.log(lista2[0]);

let lista3 = [0, false, "Texto", 6.5, "Outro texto", function() {
  alert("oi")
}];

// Percorrendo um array com for loop
for (let i = 0; i < lista3.length; i++) {
  console.log(lista3[i]);
};
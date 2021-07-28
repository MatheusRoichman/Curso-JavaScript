// O método join transforma o array em uma string, separando os itens pelo separador definido como parâmetro do método.

let lista10 = [3, 5, 7, 9]

// Diferente dos outros métodos, este não ateibui automaticamente o resultado ao valor da variável, então é necessário uma operação manual.
lista10 = lista10.join(' - ');

console.log(lista10)
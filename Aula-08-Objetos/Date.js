// Date vai retornar informações sobre a data e hora de quando for chamado.

// Instanciamos um objeto do tipo Date e usaremos ele para pegar as propriedades ao longo do programa.
let dataHora = new Date();

// Milissegundos
console.log(dataHora.getMilliseconds());

// Segundos
console.log(dataHora.getSeconds());

// Minutos
console.log(dataHora.getMinutes());

// Horas
console.log(dataHora.getHours());

// Dia do mês
console.log(dataHora.getDate());

// Dia da semana. Retorna a posição do dia na semana. Começa a contar do 0, então adicionamos 1 para ficar normal para humanos.
console.log(dataHora.getDay() + 1);

// Mês. Começa a contar do 0, então adicionamos 1 para ficar normal para humanos.
console.log(dataHora.getMonth() + 1);

// Ano
console.log(dataHora.getFullYear());
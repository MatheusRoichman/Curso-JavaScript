// Objetos podem ter métodos como propriedades.
let ventilador = {
  preco: 80,
  pas: 6,
  girar: function() {
    console.log("Girando...")
  }
};

ventilador.girar();

// Object também tem métodos pré-construídos (built-in)

// Ver nome das propriedades do objeto
console.log(Object.keys(ventilador));

// Ver valores das propriedades do objeto
console.log(Object.values(ventilador));

// Ver tanto propriedades quanto valores do objeto
console.log(Object.entries(ventilador)); // Não recomendo

console.log(ventilador); // Recomendo
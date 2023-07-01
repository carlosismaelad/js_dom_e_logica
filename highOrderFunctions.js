// High order functions (funções de alta ordem) são
//  funções que recebem outras funções como parâmetro

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = [
  'Batata frita',
  'Refrigerante',
  'Chocolate',
  'Cerveja',
  'Amendoim',
  'Sanduíches'
]

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}
// Separando do forEach
console.log('---------- Separando do forEach ----------')
// Os arrays no JavaScript tem um método que faz exatamente o que fizemos acima
// o método forEach() - Significa "Para cada"
// Vamos ver como funciona
// Ele pede como parâmetro uma callback function
// Uma função de callback é um nome que utilizamos para nos referis a uma função
// parâmetro de uma high order function
//  callback --> Chamada de volta
lista.forEach(exibirElemento)

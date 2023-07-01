/* OBJETOS GLOBAIS
- São objetos padrão da linguagem que fuicam sempre
disponíveis para utilizarmos
- Não confundir com o objeto de escopo global window do navegador (ou o escopo global de outros ambientes)
- Podemos usar para criar e converter valores
- Possuem propriedades e funções úteis e frequentemente necessárias
Exemplos: Object, Array, String, Number, Date, Math etc.
Todos começam com letra maiúscula
*/
let pessoa = Object()
console.log(pessoa)
// Retorna {} informando que "pessoa" é um objeto

let lista = Array()
console.log(lista)
// Retorn [] informando que "lista" é um array

// Podemos criar com valores prontos
lista = Array('A', 'B', 'C')
console.log(lista)
// Retorna [ 'A', 'B', 'C' ]

// Com Strings
let nome = String()
console.log(nome)
// Retorna uma string vazia " "

nome = String(42)
console.log(nome)
// Retorna "42" em forma de string

let objetct = String({})
console.log(objetct)
// Retorna [object Object] porque ele não consegue parsear um
// objeto para string

// Objetos globais possuem vários métodos já ligados a si mesmo
console.log(Number.isInteger(42))
// Retorna "true" informando que 42 é um integer

console.log(Number.isInteger(4.2))
// Retorna "false" porque 4.2 é um float

console.log(Date())
// Retorna a data atual

console.log(Math.sqrt(25))
// Retorna a raiz quadrade de 25, ou seja, 5

console.log(Math.pow(2, 10))
// Retorna 2 elevado a 10 = 1024

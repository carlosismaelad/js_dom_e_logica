// Escopo nada mais é do que o contexto onde a variável foi declarada
// Ele pode ser mais externo ou interno

let categoriaCliente = 'Bronze' // Escopo mais externo

function elevarNivelDeCliente() {
  categoriaCliente = 'Prata' // Escopo interno referenciando uma variável existente
}

console.log(categoriaCliente) // Retorna "Bronze"
elevarNivelDeCliente()
console.log(categoriaCliente) // Retorna "Prata"

// Variáveis criadas em um escopo mais externos podem ser usadas em
// um escopo mais interno mas o constrário não é verdade

// VARIÁVEIS CRIADAS EM UM ESCOPO INTERNO NÃO PODEM SER USADAS EXTERNAMENTE
function criarAnimal() {
  let animal = 'gato'
}

criarAnimal()
// console.log(animal) //Retorna um erro "ReferenceError: animal is not defined"
// O próprio VsCode nos informa pelo código mais escurecido e pelo altert:
// "animal foi declarado mas o seu valor nunca é lido"

// FALAMOS ANTERIORMENTE QUE A DECLARAR UMA VARIÁVEL COM PALAVRA RESERVADA "var"
// NÃO ERA UMA BOA PRÁTICA. VAMOS VER O PORQUÊ:
function avaliarNota(nota) {
  if (nota >= 60) {
    var aprovado = true
    let situacao = 'Aprovado'
  } else {
    var aprovado = false
    let situacao = 'Reprovado'
  }
  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}

// avaliarNota(83)
// avaliarNota(49)
// Retorna:
// 83
// true
// Mesmo a variável tendo sido declarada em um escopo interno e não ter return
// para as variáveis onde usamos let o JS retorna um erro no console "ReferenceError: situacao is not defined"
// Isso se aplica ao uso do "var" em escopos internos, dentro de blocos, dentro de funções

// SE USARMO O VAR DIRETAMENTE DENTRO DA FUNÇÃO
// SEM SER DENTRO DE OUTRO BLOCO, JÁ TEREMOS UM ERRO AO EXECUTAR
function ola() {
  var texto = 'Olá, mundo!'
}
// console.log(texto)
// ReferenceError: texto is not defined

// VAMOS VER OUTRO ERRO QUE PODE SER GERADO USANDO  "var":
console.log(nome) // Retorna undefined

var nome = 'Carlos'
let sobrenome = 'Dourado'

console.log(nome) // Retorna "Carlos"

// Se usarmos o let o JS retorna Cannot access 'sobrenome' before initialization,
// ou seja, "Não pode acessar sobrenome antes de ser inicializada"
// Isso ocorre porque quando usamos o "var" o JavaScript iça essa variável para
// o topo do programa, mas sem o valor. Por isso ela retornou algo mas "undefined"
// Já o let só existe exatamente na linha onde foi escrito

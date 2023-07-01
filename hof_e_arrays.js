const personagens = [
  { nivel: 42, nome: 'Thrall', raca: 'Orc', classe: 'Xamã' },
  { nivel: 28, nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Varok', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Uther', raca: 'Humano', classe: 'Paladino' },
  { nivel: 26, nome: 'Jaina', raca: 'Humano', classe: 'Maga' },
  { nivel: 39, nome: 'Tyrande', raca: 'Elfo Noturno', classe: 'Sacerdotisa' },
  { nivel: 29, nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro' }
]
console.log('---------- MAP ---------')
// PRIMEIRO MÉTODO - Map
/* Mapeamento do arrays - cria um novo array, não faz nenhuma modificação no array existente
Vamos adicionar ao array "nomes" apenas os nomes do array personagens

* PODERÍAMOS FAZER COMO FIZEMOS ABAIXO:

const nomes = []
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}

Mas vamos usar o map */

const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nomes)

console.log('---------- FILTER ---------')

// SEGUNDO MÉTODO - filter()
/* Serve para filtar elementos de um array, selecionar elementos
específicos de um array. O filter() também cria um
novo array com esses elemementos. Ele também é uma 
high order function */

/* QUEREMOS APENAS OS PERSONAGENS DA RAÇA ORC
const orcs = []
 for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca == 'Orc') {
    orcs.push(personagens[i])
  }
}

console.log(orcs) 

Mas vamos usar o filter() */

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === 'Orc'
})

console.log(orcs)

console.log('---------- REDUCE ---------')
// TERCEIRO MÉTODO - reduce()
/* Também é um método para transformar arrays. Cria um novo array, assim como o map e o filter. Só que ele é um pouco mais complicado, mais elaborado no seu funcionamento.
Serve para transformar o array em uma outra coisa: uma string, um número etc.
Vamos obter o valor total dos nívéis somados:

No presente caso, diferente do map e do filter, o primeiro parâmetro que a função de callback do reduce recebe não é o elemento atual e sim o valor acumulado da iteração anterior. Depois ele recebe o elemento atual.
O segundo parâmetro do recuce é o valor inical de "valorAcumulado"
 */
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

/* Agora vamos organizar por raças ainda usando o reduce */

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }

  return valorAcumulado
}, {})

console.log(racas)

console.log('---------- SORT ---------')
// Serve para ordenar arrays. Podemos pegar elementos de um array e mudar eles de
// posição de acordo com algum critério
// Aqui vamos ordenar os personagens de acordo com o nível deles
// Não vamor armazenar o uso do método em nenhuma variável
// Isso porque o sort modifica o array existente, não cria um novo array.

personagens.sort(function (a, b) {
  return a.nivel - b.nivel // ordem crescente
  // return b.nivel - a.nivel - ordem decrescente
})
console.log(personagens)

// Para criar uma cópia do array oiginal usamos "personagens.slice().sort()",
// com isso poderemos armazenar em uma nova variável
const ordemNivel = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel // ordem decrescente
})
console.log(ordemNivel)

// Métodos são do que funções atreladas a objetos
let pessoa = {
  nome: 'Carlos',
  idade: 26
}

console.log(pessoa)

// Dentro desse objeto "pessoa" podemos atrelar uma função
// Por exemplo: se dermos um typeof console veremos que ele é um objeto
// Se dermos um typeof console.log veremos que é uma função, ou seja,
// uma função atrelada a um objeto

// Como podemos fazer isso?
let individuo = {
  nome: 'Fulano',
  idade: 30,
  cumprimenta() {
    console.log('Olá, tudo bem?')
  }
}

individuo.cumprimenta()
// Retorna apenas a função "Olá, tudo bem?"

// Dentro do método podemor referenciar o próprio objeto
let mulher = {
  nome: 'Mariazinha',
  idade: 25,
  seApresenta() {
    console.log(`Olá! Me chamo ${this.nome} e tenho ${this.idade} anos.`)
  }
}
mulher.seApresenta()
// Retorna "Olá! Me chamo Mariazinha e tenho 25 anos."
// Dentro do contexto de um objeto a palavra reservada "this" aponta sempre
// para o próprio objeto

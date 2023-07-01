// Vamos aprender o que é o retorno de uma função
// Nada mais é do que a saída que a função nos devolve

function massaCorporea(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

const resultado = massaCorporea(69, 1.75)
console.log(`O IMC é ${resultado}`)

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1
  }
  return produto
}

const notebook = criarProduto('Notebook Razer i5 16gb', 3500.0)
console.log(notebook)

// Em vez de armazenar o novo produto em uma variável
// Poderiamos imprimir no console dietamente fazendo assim:
console.log(criarProduto('Notebook Razer i5 16gb', 3500.0))

// O RETORNO DE UMA FUNÇÃO PODE SER QUALQUER EXPRESSÃO:
function areaRetangular(base, altura) {
  return base * altura
}

console.log(areaRetangular(3, 5))

// O RETURN PODE SER ATÉ A CHAMADA DE OUTRA FUNÇÃO OU DA MESMA:
function areaQuadrado(lado) {
  return areaRetangular(lado, lado) // note que chamammos a função anterior
}

console.log(areaQuadrado(4)) // Retorna 16
// Explicando o que aconteceu:
// Chamamos a função areaQuadrado, que chamou a função areaRetangular
// a função areaRetangular recebe lado * lado repassado pela função
// areaQaudrado
// A função areaRetangular multiplica um valor pelo outro e retorna o resultado

// FUNÇÕES SÓ PODEM RETORNAR UMA ÚNICA VEZ!!!
// Não podem ser construídas como no exemplo abaixo:

function ola() {
  let texto = '...'
  return texto
  texto = 'Olá, mundo!'
  console.log(texto)
}
console.log(ola()) // Retorna "..." Perceba como as linhas que não
// estão em uso estão apagadas e exbibem "código inacessível detectado"
// Para que os código inacessíveis fossem alcançados o return deveria estar
// abaixo deles

// EXISTEM CASO EM QUE PODEMOS DEFINIR VÁRIOS RETURN EM UMA FUNÇÃO:
function maioridade(idade) {
  if (idade >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}

console.log(maioridade(17)) // Retorna "Menor de idade"
console.log(maioridade(29)) // Retorna "Maior de idade"
// Se aplica ao Switch case também

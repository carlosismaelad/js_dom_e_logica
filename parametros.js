// Parâmetros são as entradas de uma função,
// o que entregamos para ela para que ela faça o seu procedimento
// Noss parâmetro aqui é o "x"
function dobro(x) {
  return console.log(`O dobro de ${x} é ` + x * 2)
}

dobro(5) // Retorna: O dobro de 5 é 10

function dizerOla(name = 'caro leitor') {
  return console.log(`Olá, ${name}!`)
}

dizerOla('Carlos')
dizerOla() // Retorna: Olá, caro leitor!

function criarUsuario(nome, email, senha, tipo = 'bronze') {
  const usuario = {
    nome, // equivale a nome:nome
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

criarUsuario('Carlos', 'email@mail.com', 123456)

// Podemos ter funções com muitos parâmetros
function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}

// e podemos ter funções com poucos prarâmetros
function objetosComoParamentos(usuario) {
  usuario.nome
  usuario.telefone
  usuario.endereco
  usuario.aniversario
  usuario.email
  usuario.senha

  console.log(usuario)
}

const dadoUsuario = {
  nome: 'Carlos',
  telefone: 85987654321,
  endereco: 'Rua A 121, Bem Ali, Joquei',
  aniversario: '30/10/90',
  email: 'carlos@email.com',
  senha: 123456
}

objetosComoParamentos(dadoUsuario)

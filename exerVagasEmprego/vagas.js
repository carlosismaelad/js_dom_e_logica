let vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + '. '
    textoFinal += vaga.nome
    textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
    return textoFinal
  }, '')

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt('Informe o novo da vaga: ')
  const descricao = prompt('Informe a descrição da vaga: ')
  const dataLimite = prompt('Informe a data limite (dd/mm/aaaa) : ')
  const confirmacao = confirm(
    'Deseja criar uma nova vaga com essas informações?\n' +
      'Nome da vaga: ' +
      nome +
      '\nDescrição: ' +
      descricao +
      '\nData limite: ' +
      dataLimite
  )

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert('Vaga criada!')
  }
}

function exibirVaga() {
  const indice = prompt('Informe o índice da vaga que deseja exibir: ')

  if (indice >= vagas.length || indice < 0) {
    alert('Índice inválido!')
    return
  }

  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
    textoFinal + '\n - ' + candidato, ''
  })

  alert(
    'Vaga nº ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData limite: ' +
      vaga.dataLimite +
      '\nQuantidade de candidatos: ' +
      vaga.candidatos.length +
      '\nCandidatos inscritos: ' +
      candidatosEmTexto
  )
}

function inscreverCandidato() {
  const candidato = prompt('Informe o nome do(a) candidato(a): ')
  const indice = prompt(
    'Informe o indice da vaga para qual deseja se inscrever: '
  )
  const vaga = vagas[indice]
  const confirmacao = confirm(
    'Deseja inscrever o candidato? ' +
      candidato +
      ' na vaga ' +
      indice +
      '?\n' +
      'Nome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData limite: ' +
      vaga.dataLimite
  )
  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert('Inscrição confirmada! ')
  }
}

function excluirVaga() {
  const indice = prompt('Informe o índice da vaga que deseha excluir: ')
  const vaga = vagas[indice]
  const confirmacao = confirm(
    'Tem certeza de que deseja excluir a vaga' +
      indice +
      '\n?' +
      'Nome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData limite: ' +
      vaga.dataLimite
  )
  if (confirmacao) {
    vagas.splice(indice, 1)
    alert('Vaga excluída! ')
  }
}

function exibirMenu() {
  const opcao = prompt(
    'Cadastro de vagas de emprego' +
      '\n\nEscolha uma das opções abaixo: ' +
      '\n1. Listar vagas disponíveis' +
      '\n2 . Criar nova vaga' +
      '\n3 . Exibir uma vaga' +
      '\n4 . Inscrever um candidato' +
      '\n5 . Excluir uma vaga' +
      '\n6 . Sair'
  )

  return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case '1':
        listarVagas()
        break
      case '2':
        novaVaga()
        break
      case '3':
        exibirVaga()
        break
      case '4':
        inscreverCandidato()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert('Saindo...')
      default:
        alert('Opção inválida!')
    }
  } while (opcao != '6')
}

executar()

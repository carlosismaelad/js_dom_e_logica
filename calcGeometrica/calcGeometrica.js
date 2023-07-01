function areaTriangulo() {
  const base = parseFloat(prompt('Informe a base do triângulo: '))
  const altura = parseFloat(prompt('Informe a altura do triângulo: '))
  return (base * altura) / 2
}

function areaRetangulo() {
  const base = parseFloat(prompt('Informe a base do Retângulo: '))
  const altura = parseFloat(prompt('Informe a altura do Retângulo: '))
  return base * altura
}

function areaQuadrado() {
  const lado = parseFloat(prompt('Informe o lado do quadrado: '))
  return lado * lado
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt('Informe a base maior do Trapézio: '))
  const baseMenor = parseFloat(prompt('Informe a base menor do Trapézio: '))
  const altura = parseFloat(prompt('Informe a altura do Trapézio: '))
  return ((baseMaior + baseMenor) * altura) / 2
}

function areaCirculo() {
  const raio = parseFloat(prompt('Informe o raio do Círculo'))
  return 3.14 * (raio * raio)
}

function exibirMenu() {
  return prompt(
    'Calculadora Geométrica\n' +
      '1. Calcular área do triângulo\n' +
      '2. Calcular área do retângulo\n' +
      '3. Calcular área do quadrado\n' +
      '4. Calcular área do trapézio\n' +
      '5. Calcular área do círculo\n' +
      '6. Sair\n'
  )
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case '1':
        resultado = areaTriangulo()
        break
      case '2':
        resultado = areaQuadrado()
        break
      case '3':
        resultado = areaQuadrado()
        break
      case '4':
        resultado = areaTrapezio()
        break
      case '5':
        resultado = areaCirculo()
        break
      case '6':
        alert('Saindo...')
        break
      default:
        alert('Opcão inválida')
    }

    if (resultado) {
      alert(`Resultado: ${resultado}`)
    }
  } while (opcao != '6')
}

executar()

// Funções recursivas são funções que chama ela mesma e isso cria
// uma pilha de chamadas de funções que vão se repetindo

function dividir(num) {
  console.log(num)
  if (num % 2 == 0) {
    dividir(num / 2)
  } else {
    return num
  }
}

dividir(40)
// Retorna:
// 40
// 20
// 10
// 5
/* 
Como a função está agindo?
Ela mostra o número repassado
Verifica se o numero é par e, se for, divide por 2
Exibe esse número resultante da divisão
Verifica se ele é par. Se for, divide novamente por 2
E faz isso até que o número não seja mais divisível por 2
*/

//  Devemos ter cuidado com funções recursivas porque elas podem entrar em
// um loop e não pararem a execução ou gerar um estouro de pilha
function dobrar(num) {
  console.log(num)
  dobrar(num * 2)
}

// dobrar(1)
// A função acima não tem fim para a execução
// Dá um erro informando que atingimos o máximo da pilha de chamadas

// VAMOS CRIAR UMA FUNÇÃO MATEMÁTICA QUE RESOLVE ALGO BEM LEGAL
// fatorial de 5: !5 -> 5*4*3*2*1 == 5* !4
function fatorial(num) {
  console.log('Numero: ' + num)
  if (num == 0) {
    //caso base
    return 1
  } else if (num == 1) {
    return 1
  } else {
    console.log(num + ' * + !' + (num - 1))
    return num * fatorial(num - 1)
  }
}

console.log(fatorial(5))

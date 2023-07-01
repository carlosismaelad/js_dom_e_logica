const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = input.value == '' ? 'Olá, mundo!' : ''
})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
  // input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = input.placeholder == '' ? 'Digite algo...' : ''
})

document.getElementById('disable').addEventListener('click', function () {
  input.disabled =
    input.disabled == true ? (input.disabled = false) : (input.disabled = true)
  // input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.something
  console.log('O valor do atributo data-something é: ' + data)
  input.dataset.something = 'um outro valor'
  console.log(
    'O valor do atributo data-something agora é: ' + input.dataset.something
  )
})

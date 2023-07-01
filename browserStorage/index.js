document.getElementById('sessionBtn').addEventListener('click', function () {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function () {
  const info = sessionStorage.getItem('info')
  alert('A informação salva é: ' + info)
})

document.getElementById('localBtn').addEventListener('click', function () {
  const inputLocalStorage = document.getElementById('local')
  localStorage.setItem('infoLocalStorage', inputLocalStorage.value)
  inputLocalStorage = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
  const infoLocalStorage = localStorage.getItem('infoLocalStorage')
  alert('A mensagem salva no local storage é: ' + infoLocalStorage)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
  const inputCookie = document.getElementById('cookie')
  // cookieName = value; expires = UTCStringDate; path = /;
  const cookie = 'infoCookie=' + inputCookie.value + ';'
  const expiration = 'expires=' + new Date(2023, 7, 1) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  inputCookie.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
  const inputCookie2 = document.getElementById('cookie2')
  const cookie2 = 'infoCookie2=' + inputCookie2.value + ';'
  const expiration = 'expires=' + new Date(2023, 7, 1) + ';'
  const path = 'path=/;'
  document.cookie = cookie2 + expiration + path
  inputCookie2.value = ''
  console.log(document.cookie)
})

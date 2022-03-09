function converter() {
  let valorElemento = document.getElementById('valor')
  let change = valorElemento.value
  let valorFloat = parseFloat(change)
  let final = valorFloat * 5.1

  let elementoValorConvertido = document.getElementById('valorConvertido')
  let valorConvertido = 'O resultado em dolares é U$' + final.toFixed(2)

  elementoValorConvertido.innerHTML = valorConvertido
}

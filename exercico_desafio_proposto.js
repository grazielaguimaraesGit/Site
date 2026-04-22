
function desconto() {
    let valorOriginal = document.getElementById('preco').value

    let valorDesconto = document.getElementById('desconto').value

    let preco_com_desconto = valorOriginal - (valorDesconto / 100)

    document.getElementById('res').innerHTML = `Valor com desconto: ${preco_com_desconto}`

}
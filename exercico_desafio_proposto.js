/*
Exercío proposto:

1 - Criar pagina básica com título, descrição da atividade e espaço
para inserção de dados pelo usuário.

2 - Dois campos para o preço original e o outro para a porcentagem
de desconto.

3 - botão que vai execuutar a função.

4 - a função deve usar operadores para calcular o valor do desconto
e o preço final.

5 - usar estruturas condicionais if-else para verificar se os
valores são válidos. Por exemplo (preços ou porcentagens negativas)
não serão permitidas.
*/
function desconto() {
    let valorOriginal = document.getElementById('preco').value

    let valorDesconto = document.getElementById('desconto').value

    let preco_com_desconto = valorOriginal * (valorDesconto / 100)

    /*if(valorDesconto === 5) {
        preco_com_desconto = valorOriginal * 

    }*/ /*Falta fazer o if e else */




}
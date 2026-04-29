
let fundo_preto = document.getElementById('fundo_preto')


//Função que recebe o objeto e uma cor que será o background
let mudaCorFundo = (objetoHTML, cor) => {
    objetoHTML.style.backgroundColor = cor
}

//Função que recebe o objeto e uma cor que será o color
let mudaCorFonte = (objetoHTML, cor) => {
    objetoHTML.style.color = cor
}


let paragrafo = document.getElementById('paragrafo')
paragrafo.style.display = 'none'

//Recebe as duas funções
fundo_preto.addEventListener('mouseout', () => {
    mudaCorFundo(document.body, '#000')
    mudaCorFonte(document.body, '#FFF')
   // setarClasseCSS(paragrafo, 'p')
})

//Recebe e seta uma classe css para o elemento
let setarClasseCSS = (objetoHTML, classeCSS) => {
    objetoHTML.classList.add(classeCSS)

}


//Exercício proposto - aula 25
let selectHTML = document.getElementById('pedido')




//Evento change
let resultado = 
selectHTML.addEventListener('change', () => {
   let numero_do_pedido = parseInt(document.getElementById('pedido').value)

   
    switch(numero_do_pedido) {

        case 1:
            return 'Pizza de Calabresa'
            

            case 2:
                return 'Pizza de quatro queijos'

                case 3:
                    return 'Pizza de frango com catupiry'

                    case 4:
                        return 'Pizza de Brigadeiro'

                        default:
                            return 'Número de pedido inválido'
    }

  
  

})

  paragrafo.style.display = 'block'

//Criando um objeto
let cliente = {
    nome: 'Graziela',
    mesa: 7,
    pedido: resultado
}

for(let c  in cliente) {
    paragrafo.innerHTML = `Cliente: ${cliente.nome}, Mesa: ${cliente.mesa}
    Pedido: ${cliente.pedido}`
}





   
















//dbclick
//focus
//change
//afterprint
//beforeprint
//load
//offline
//online
//open
//scroll
//show

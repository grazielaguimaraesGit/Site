
let fundo_preto = document.getElementById('fundo_preto')


//Função que recebe o objeto e uma cor que será o background
let mudaCorFundo = (objetoHTML, cor) => {
    objetoHTML.style.backgroundColor = cor
}

//Função que recebe o objeto e uma cor que será o color
let mudaCorFonte = (objetoHTML, cor) => {
    objetoHTML.style.color = cor
}




//Recebe as duas funções
fundo_preto.addEventListener('mouseout', () => {
    mudaCorFundo(document.body, '#000')
    mudaCorFonte(document.body, '#FFF')
   
})

//Recebe e seta uma classe css para o elemento
let setarClasseCSS = (objetoHTML, classeCSS) => {
    objetoHTML.classList.add(classeCSS)

}


//Exercício proposto - aula 25
let selectHTML = document.getElementById('pedido')

let paragrafo = document.getElementById('paragrafo')
paragrafo.style.visible = false



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

//Corrigir erros
  paragrafo.style.visible = true

//Criando um objeto
let cliente = {
    id:1,
    nome: 'Graziela',
    mesa: 7,
    pedido: 'Em andamento'
}


for(let c  in cliente) {

 
    paragrafo.innerHTML = `Cliente: ${cliente.id} - ${cliente.nome}, Mesa: ${cliente.mesa}
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

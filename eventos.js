
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

//Recebe as duas funções
fundo_preto.addEventListener('mouseout', () => {
    mudaCorFundo(document.body, '#000')
    mudaCorFonte(document.body, '#FFF')
    setarClasseCSS(paragrafo, 'p')
})

//Recebe e seta uma classe css para o elemento
let setarClasseCSS = (objetoHTML, classeCSS) => {
    objetoHTML.classList.add(classeCSS)

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

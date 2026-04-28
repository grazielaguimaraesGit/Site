


let funcao = () => {

    let container = document.getElementById('container')
    container.style.width = '600px'
    container.style.height = '600px'

    let card = document.createElement('div')
    card.style.width = '300px'
    card.style.height = '300px'
    card.style.border = '1px solid grey'
    card.style.padding = '10px'

    let tituloCard = document.createElement('h1')
    let paragrafo = document.createElement('p')

    paragrafo.innerHTML = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

    //Array
    let usuarios = ['Maria','Pedro','Luiza']
    usuarios.push('Sandra')

    //Objeto
    let pessoa = {
        nome: 'Graziela',
        idade: 38
    }

    for (let user in usuarios) {
     
        console.log(user)
        tituloCard.innerHTML += `Nome: ${usuarios[user]} <br>`

        card.appendChild(tituloCard)
        card.appendChild(paragrafo)

        container.appendChild(card)

    }


}

funcao()
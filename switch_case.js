

const div1 = document.getElementById('div1')

const div2 = document.getElementById('div2')

const div3 = document.getElementById('div3')

//Recebendo a cor vinda do HTML
function trocarCor(cor) {

    switch (cor) {
        case 'blue':

            div1.style.backgroundColor = cor
            break

        case 'red':

            div2.style.backgroundColor = cor
            break

        case 'magenta':
            div3.style.backgroundColor = cor
            break

        default:
            div3.className = 'rosa'
            div2.className = 'rosa'
            div1.className = 'rosa'


    }



}
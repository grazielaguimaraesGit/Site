
function verificaNota() {

    let nota = Number.parseFloat(document.getElementById('nota').value )
    

    console.log(nota)
    
    
    let situacao = ''

    

        if(nota <= 5){ 
        situacao = 'Aluno reprovado'
        }

        else if(nota>5 && nota <7){
            situacao = 'Aluno em recuperação'
        }

        else {
        situacao = 'Aluno aprovado'
        }

       
    

    alert(`Aluno com nota: ${nota}, situação: ${situacao}`)

    document.getElementById('resultado').innerHTML = situacao
}
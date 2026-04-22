
/*var, let e const*/

    var nome = 'Graziela'
    console.log(nome)

    function mudaNome() {
        let sobrenome = `${nome} Guimarães`
    }
    
    console.log('Testando o valor da variável sobrenome com let: ' + sobrenome)

function variaveis() {

    nome = 'Juliana'
    console.log(nome)

}
variaveis()
/*
function enviarDados() {

    

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value

    let estado = document.getElementById('estado').value


    let sim_nao = document.getElementById('sim_nao').value




    if(nome == "" || email == "" || estado == ""){
        alert('Preencha os campos')
    }
     
    else {

        
        alert('Nome: ' + nome)
        alert('E-mail: ' + email)
        alert(`Estado selecionado: ${estado}`)
        alert('Deseja receber atualizações? Sua resposta: ' + sim_nao)
        

       /* let resposta = document.getElementById('response')
        resposta.setAttribute("class", "container")

        resposta.innerHTML = `Nome: ${nome}, 
        Email: ${email}, Estado: ${estado}, Receber atualizações? ${sim_nao}`
   
        
       
        }
}*/

function enviarDados() {

    //Obrigatórios
    let nome = document.getElementById('nome').value
    
    //Obrigatórios
    let email = document.getElementById('email').value
    
    //Obrigatórios
    let idade = document.getElementById('idade').value
    
    let materia = document.getElementById('materia').value
    let escolaridade = document.getElementById('escolaridade').value
    
    //Obrigatórios
    let descricao = document.getElementById('decsricao').value
    
    let atualizacoes = document.getElementById('atualizacoes').value

    if(nome == "" || email == "" || idade == "" || descricao == ""){
        alert('Preencha os campos obrigatórios')
    }

    else{

        console.log(nome)
        console.log(email)
        console.log(idade)
        console.log(materia)
        console.log(escolaridade)
        console.log(descricao)
        console.log(atualizacoes)

        alert(`Olá ${nome}! Seu e-mail: ${email} e sua idade: ${idade}. Você escolheu a disciplina: ${materia}, possui o nível: ${escolaridade}. E essa é você: ${descricao}.
            Sua resposta em receber atualizações é: ${atualizacoes}.`)
    }


}
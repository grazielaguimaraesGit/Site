
/*Calculadora*/



function cal(tipo, valor){

   //Estpa dando erro
    //Verificando os valores vindos por parâmentro
    if(tipo == 'numero') {

        switch(valor) {

            
            case '1':
            document.getElementById('tela').value = '1'
            break

            default:
                tela.value = 'Erro'
        }
    } 

    else{
        alert('erro') //Faz algo caso seja um operador
    }
}

    

   //Verifica a ação no teclado usuário
    document.addEventListener("keydown", function(event) {
     let teclaSelecionada =  event.key
     console.log(teclaSelecionada)
   });

  
/*Calculadora*/
function cal(tipo, valor) {

 


    console.log(tipo, valor)
    //Estpa dando erro
    //Verificando os valores vindos por parâmentro



    if (tipo == 'numero') {

        switch (valor) {


            case '1':
                document.getElementById('tela').value += '1'
                break

            case '2':
                document.getElementById('tela').value += '2'
                break

            case '3':
                document.getElementById('tela').value += '3'
                break

            case '4':
                document.getElementById('tela').value += '4'
                break

            case '5':
                document.getElementById('tela').value += '5'
                break

            case '6':
                document.getElementById('tela').value += '6'
                break

            case '7':
                document.getElementById('tela').value += '7'
                break

            case '8':
                document.getElementById('tela').value += '8'
                break

            case '9':
                document.getElementById('tela').value += '9'
                break

            case '0':
                document.getElementById('tela').value += '0'
                break

            default:
                tela.value = 'Erro'
        }
    }

    else if (tipo == 'outro') {

        switch (valor) {

            case '+':
                document.getElementById('tela').value += '+'
                break

            case '-':
                document.getElementById('tela').value += '-'
                break

                 case '*':
             document.getElementById('tela').value += '*'
            break

             case '/':
             document.getElementById('tela').value += '/'
            break

             case '.':
             document.getElementById('tela').value += '.'
            break

             case ',':
             document.getElementById('tela').value += ','
            break

            //verificar
             case 'del':
             let num = document.getElementById('tela').value
             let deletar = num.slice(0,-1)
             document.getElementById('tela').value = deletar
             break //Se não colcar o break vai dar tudo errado
            
            //verificar
            case 'expo':
             document.getElementById('tela').value = document.getElementById('tela').value ** 2//? Verificar como fazer
            break



            case '=':
            let telaRes = document.getElementById('tela').value 
            let resultado = eval(telaRes)

            document.getElementById('tela'). value = resultado

            break

             
            case 'limpar':
             document.getElementById('tela').value =''
             break

            default:
                document.getElementById('tela').value = 'Erro desconhecido'
            

        }

    }
}
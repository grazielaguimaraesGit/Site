//Criar um array de frutas
let frutas = []

//Inserir cinco frutas
frutas.push('Maçã', 'Banana', 'Carambola', 'Amora', 'Ameixa')
console.log(frutas)

//acessar o terceiro item e exibi-lo
let terceiro_item = frutas[2] 
let pegar_indice = frutas[3 - 1] 
console.log(`Terceiro ítem do array: ${pegar_indice}`)

//alterar o segundo ítem do array
frutas[1] = 'Manga'
console.log(frutas)

frutas.push('Laranja', 'Pêssego')
console.log(frutas)

//Tamanho do array
let tamanho_length = frutas.length - 1
console.log(tamanho_length)


//Começa com 1 e a cada iteração, incrementa 1
let contador = 1;

while(contador <= 10){
    console.log('Contador: ' + contador)
    //Incrementando
    contador++
}

let dd = 1

do {
    console.log(`Do while: ${dd} `)
    dd++
} while (dd <= 10) 
    

for(let f in frutas){
    console.log(`Fruta ${f}: ${frutas[f]}`)
}

let lista = document.getElementById('lista')





for(let li in frutas){

  
 lista.innerHTML += `
 <ul>
<li> Fruta: ${frutas[li]}</li>
</ul>` 
}



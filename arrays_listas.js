//Criar um array de frutas
let frutas = []

//Inserir cinco frutas
frutas.push('Mação', 'Banana', 'Carambola', 'Amora', 'Ameixa')
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




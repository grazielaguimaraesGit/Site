
function adicionar() {

    
let produto = document.getElementById('produto').value 

let lista = []
lista.push(produto)

for(let p in lista) {

console.log(lista[p])
}


}
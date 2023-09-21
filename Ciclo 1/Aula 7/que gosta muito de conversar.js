var frutas = ["Pêra", "Uva", "Maçã", "Salada Mista"]

//Colocar no final da array
frutas.push("Abacate")
console.log(frutas)

//Retirar o último da array
frutas.pop()
console.log(frutas)

//Retirar o primeiro da array
frutas.shift()
console.log(frutas)

//Colocar no início da array
frutas.unshift("Morango")
console.log(frutas)

//Retirar de posição específica da array
//array.splice(posição,quantos a partir daí,substituição)
frutas.splice(1,0,"Bergamota","Cacau")
console.log(frutas)

//Printar a posição de um elemento da array
console.log(frutas.indexOf("Cacau"))

//Loop para mostrar cada elemento da array em ordem
for(var i=0; i < frutas.length;i++){
    console.log(frutas[i] + ":" + (i+1))
}
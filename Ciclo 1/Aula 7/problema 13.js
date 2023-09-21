//Haviam 5 carros.
var carros = ["Compass", "Renegade", "Outlander", "Tracker", "Duster"]
console.log("Haviam 5 carros: " + carros + "\n")

//Cliente comprou o Tracker
carros.splice(3,1)
console.log("Certo dia, um cliente comprou o Tracker: " + carros + "\n")

//Novo carro: Onix
carros.push("Onix")
console.log("Então, o dono adicionou mais um carro, o Onix: " + carros + "\n")

//Retira o Compass
carros.splice(0,1)
console.log("Outro dia, um cliente se interessou no Compass.\nPorém, ouviram um barulho estranho no carro,\ne resolveram retirar o carro de estoque: " + carros + "\n")

//Compra-se o Outlander em troca de um Pajero TR4
carros.splice(1,1,"Pajero TR4")
console.log("O cliente quis comprar o Outlander, e trocou-o pelo seu Pajero TR4: " + carros + "\n")

//Adiciona-se o Tiggo 7
carros.push("Tiggo 7")
console.log("Um cliente querendo dinheiro vendeu seu Tiggo 7: " + carros + "\n")

//Retira-se o Duster
carros.splice(2,1)
console.log("Outro cliente estava interessado pelo Duster, então o dono retirou do catálogo, mas em outro momento,\nquando outro cliente se mostrou interessado pelo Duster, não pode comprá-lo, pelo mesmo estar fora do catálogo: \n" + carros)

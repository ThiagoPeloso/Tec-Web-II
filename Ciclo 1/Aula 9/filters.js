let numeros = [0,1,2,3,4,5,6,7,8,9,10]

//forma 1
var resultado = numeros.filter(item => item % 2 == 0)
console.log(resultado)

//forma 2
var numerosFiltrados = numeros.filter(
    function(item){
        return item > 5
    }
)
console.log(numerosFiltrados)

//forma 3
function buscarValores(valor){
    return valor < 5
}
var numerosEncontrados = numeros.filter(buscarValores)
console.log(numerosEncontrados)

//forma 4
var result = numeros.filter((valor) =>{
    return valor > 5;
})
console.log(result)


const pessoas = [
    {nome: "Pedro", idade: 21},
    {nome: "Flávio", idade: 26},
    {nome: "Vitor", idade: 32},
    {nome: "Milena", idade: 26},
    {nome: "Matheus", idade: 20}
]


const pessoasComNome = pessoas.filter(function(valor){
    console.log(valor.nome)
})
console.log(pessoasComNome)


const pessoasComNomeGrande = pessoas.filter(function(valor){
    return valor.nome.length > 5
})
console.log(pessoasComNomeGrande)


const pessoasComNomeMenor = pessoas.filter(function(valor){
    return valor.nome.length <= 4
})
console.log(pessoasComNomeMenor)


const nomeTerminaComO = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('o')
})

console.log(nomeTerminaComO)
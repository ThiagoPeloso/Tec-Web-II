const numeros = [1,2,3,4,5,6,7,8,9,0]
const numerosDobrados = numeros.map(function(valor,index,array){
    return valor * 2
})

//console.log(numerosDobrados)

const pessoas = [
    {nome: "Pedro", idade: 21},
    {nome: "Flávio", idade: 26},
    {nome: "Vitor", idade: 32},
    {nome: "Milena", idade: 26},
    {nome: "Matheus", idade: 20}
]

const nomes = pessoas.map(function(valor){
    return valor.nome
})

const nomes2 = pessoas.map(valor => valor.nome)

const novoObj = pessoas.map(function(valor,indice){
    const newObj = {...valor}
    newObj.id = indice
    return newObj
})

//console.log(novoObj)

const pessoas2 = [
    {nome: "Pedro", idade: 21, sobrenome: "Augusto"},
    {nome: "Flávio", idade: 26, sobrenome: "Bonoro"},
    {nome: "Vitor", idade: 32, sobrenome: "Müller"},
    {nome: "Milena", idade: 26, sobrenome: "Teflon"},
    {nome: "Matheus", idade: 20, sobrenome: "Viana"}
]

var novasPessoas = pessoas2.map((valor,indice) =>{
    let item = {}
    item.nomeCompleto = `${valor.nome} ${valor.sobrenome}`
    item.id = indice
    return item
})

console.log(novasPessoas)
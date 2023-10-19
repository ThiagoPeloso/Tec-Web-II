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
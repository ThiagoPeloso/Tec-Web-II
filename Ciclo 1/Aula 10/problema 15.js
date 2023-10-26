const produtos = [
    {nome:"geladeira"},
    {nome:"fogão"},
    {nome:"coifa"}
]

const nomeMaiusculo = produtos.map(function(valor) {
    return valor.nome.charAt(0).toUpperCase() + valor.nome.slice(1)
})

console.log(nomeMaiusculo)
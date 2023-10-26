var produtos = [
    {id : 1, descricao: "Videogame", categoria : 'Eletrônico'},
    {id : 2, descricao: "Desktop", categoria : 'Eletrônico'},
    {id : 3, descricao: "Geladeira", categoria : 'Eletrodomestico'},
    {id : 4, descricao: "Processador de Alimentos", categoria : 'Eletrodomestico'},
    {id : 5, descricao: "Smartphone", categoria : 'Eletrônico'}
]

function retornarEletronico(value){
    if(value.categoria == 'Eletrônico'){
        return value
    }
}

var eletronicos = produtos.filter(retornarEletronico)

eletronicos.forEach(eletronico => {
    console.log(eletronico)    
})
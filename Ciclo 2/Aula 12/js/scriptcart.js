var valorTotal = [0, 0]
var valorProduto = [50.00, 30.00]
var qtd = [0, 0]

function adicionarItem(item) {
    var quantidade = document.getElementById('quantidade' + item)
    var total = document.getElementById('total' + item)
    qtd[item] += 1
    valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item]);
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    if (qtd[item] <= 0) {
        quantidade.innerHTML = ""
        total.innerHTML = ""
        qtd[item] = 0
    }
}

function removerItem(item) {
    var quantidade = document.getElementById('quantidade' + item)
    var total = document.getElementById('total' + item)
    qtd[item] -= 1
    valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item]);
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    if (qtd[item] <= 0) {
        quantidade.innerHTML = ""
        total.innerHTML = ""
        qtd[item] = 0
    }
}

function valorCompra() {
    var valorTotal = document.getElementById('valorTotal');
    var valor = 0
    for (var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i]
    }
    valorTotal.innerHTML = valor.toFixed(2);
}

function removerProduto(produto){
    var pai = document.getElementById('carrinho')
    var filho = document.getElementById('produto' + produto)
    if(confirm('Excluir o produto?')){
        valorTotal[produto] -= (valorProduto[produto] * qtd[produto])
        qtd[produto] = 0
        pai.removeChild(filho)
        valorCompra()
    }
}
const shoppingCart = [];

function addItem(item){
    shoppingCart.push(item);
}

function removeItem(item){
    const index = shoppingCart.indexOf(item);
    if(index !== -1){
        shoppingCart.splice(index,1);
    }
}

function displayItems(){
    if(shoppingCart.length === 0){
        console.log("Vazio!");
    }else{
        console.log("Conteúdo do carrinho:");
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(shoppingCart[i]);
        }
    }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log("Seu carrinho foi esvaziado! bye bye~");
}

displayItems();
addItem("farinha");
addItem("ovos");
addItem("leite");
displayItems();
clearCart();
displayItems();

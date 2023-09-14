const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual a bebida que vc quer? (café/chá/chocolate)",(bebidaEscolhida)=>{
    switch(bebidaEscolhida){
        case "café":
            bebidaPreco = 2.00;
            break;
        case "chá":
            bebidaPreco = 1.50;
            break;
        case "chocolate":
            bebidaPreco = 2.50;
            break;
        default:
        console.log("Tente outra vez!");
        rl.close();
        return;
    }  
})
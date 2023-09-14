var bebidaPreco = 0;
var adicionado = 0;

const bebidaEscolhida = prompt("Qual a bebida que tu quer rapá? (café, chá, chocolate)").toLowerCase();

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
    alert("Tente outra vez!");
}

const leite = prompt("Vc quer leite? (sim/não)").toLowerCase();

if(leite === "sim"){
    adicionado += 0.50;
}

const acucar = prompt("Vc quer açúcar? (sim/não)").toLowerCase();

if(acucar === "sim"){
    adicionado += 0.25;
}

const chantilly = prompt("Vc quer chantilly? (sim/não)").toLowerCase();

if(chantilly === "sim"){
    adicionado += 1.00;
}

const totalPreco = bebidaPreco + adicionado;

alert(`O preço final ficou como: ${totalPreco.toFixed(2)}`);
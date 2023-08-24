var custoFabrica = 10000;
var distribuidor = custoFabrica * 28 / 100;
var impostos = custoFabrica * 45 / 100;
var custoFinal = custoFabrica + distribuidor + impostos;

console.log(`O custo de fábrica é de ${custoFabrica}.\nConsiderando que o valor do percentual do distribuidor é de ${distribuidor},\ne que o valor do percentual dos impostos é de ${impostos},\npodemos concluir que o valor final do carro é de ${custoFinal}.`);
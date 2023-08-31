var n1 = 3;
var n2 = 6;
var n3 = 9;
var maior;

if(n1 > n2 && n1 > n3){
    maior = n1;
}else if(n2 > n1 && n2 > n3){
    maior = n2;
}else if(n3 > n1 && n3 > n2){
    maior = n3;
}

console.log(`o maior número entre ${n1}, ${n2}, e ${n3} é ${maior}!`)
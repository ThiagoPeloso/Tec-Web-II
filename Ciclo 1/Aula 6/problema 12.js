var cafe = 2.0;
var cha = 1.5;
var choco = 2.5;

var leite = 0.5;
var acucar = 0.25;
var chantilly = 1.0;

total = 'leite','chantilly';

switch(total){
    case 'leite':
        cafe = cafe + leite;
        console.log(cafe)
    case 'açúcar':
        cafe = cafe + acucar;
        console.log(cafe)
    case 'chantilly':
        cafe = cafe + chantilly;
        console.log(cafe)
        break;
    default:
        cafe = cafe;
        console.log(cafe)
}
function pessoa(peso,altura){
    imc = (peso / (altura*altura))
    return{
        imc,
        info(){
            console.log(this.imc)
        }
    }
}

joao = pessoa(85,1.69);
console.log(joao)
joao.info()
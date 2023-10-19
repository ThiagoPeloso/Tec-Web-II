//First Method
const person = {
    name: "Ben",
    surname:"Dover"
}

console.log(person['name'] + person['surname']);


//Second Method
const person1 = new Object();
person1.name = "John"
person1.surname = "Doe"
person1.sayFullName = function(){
    console.log(this.name + this.surname)
}

person1.sayFullName()

//Third Method
function createPerson(name,surname){
    return{name,surname}
}

const p1 = createPerson("Thomas","DeTrain")

console.log(p1)
console.log(p1.name + p1.surname)

function newPerson(name,surname){
    return{
        name,
        surname,
        get fullName(){
            return `${this.name} ${this.surname}`
        }
    }
}

const newp1 = newPerson("James","Bond")
console.log(newp1.fullName)

function infoPerson(name,surname,i){
    return{
        name,
        surname,
        age: i,
        info(){
            console.log(`Your name is ${this.name}, your surname is ${this.surname}, and you are ${this.age} years old.`)
        }
    }
}

staffMember = infoPerson("Adam","Sandler", 40);
console.log(staffMember)
staffMember.info()
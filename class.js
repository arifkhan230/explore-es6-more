const products = [
    { id: 1, name: 'lenovo', price: 65000},
    { id: 2, name: 'dell', price: 45000},
    { id: 3, name: 'hp', price: 40000},
    { id: 4, name: 'mac', price: 165000},
]

// has some properties, method
class Product{
    constructor(name){
        this.name = name;
    }
    country = 'Bangladesh'
    speak(talk){
        console.log(`talking about ${talk}`)

    }
}
const lenovo = new Product('Le Le Lenovo')
console.log(lenovo);
lenovo.speak('oba kita kou')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}
const tapan = new Teacher('Tapan Sir', 'Physics');
console.log(tapan)
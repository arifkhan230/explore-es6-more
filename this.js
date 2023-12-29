class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
}
const arif = new Person('Arif', 24)
console.log(arif);
arif.sleep()
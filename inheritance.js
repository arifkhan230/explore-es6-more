class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('gari colena cole na re gari cole na')
    }

}
class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price)
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}
const bus = new Bus('Ena', '2222222222222', '54','600')
console.log(bus)
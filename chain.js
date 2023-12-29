// data access
const data = [{
    name: 'babul',
    age : '23',
    address: 'kolabon'
}];
// console.log(data[0]);
// console.log(data[0].address);

const products = {
    count: 5000,
    data : [
        { id : 1, name: 'lenovo laptop', price: 65000},
        { id : 2, name: 'macbook', price: 165000},
    ]
}
// console.log(products.data[0].price);
// console.log(products.data[1].price);

const user = {
    id: 5001,
    name : 'shoriful',
    address: {
        street:{
            first : '54/1 uttor side',
            second : 'poribag er goli',
            third : 'no dorai'
        },
        city : 'Dhaka'
    }
}
const user2 = {
    id: 5001,
    name : 'shoriful',
    address: {
        country : 'banlgladesh',
        city : 'Dhaka'
    }
}
console.log(user.address.street?.second);
console.log(user2.address.street?.second);


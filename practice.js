// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data.Sophia.study[1].secondary[1])

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
// console.log(students['2222'].address["city"])   
// console.log(students['3333'].name)

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// console.log(data2.data[0].bookDetails.name)
// console.log(data2.data[1].bookCategory)

// -----------------------------------------

// optional practice problem ---> 1

// using for of loop

const numbers = [1, 3, 5, 7, 9];
let evenNumbers = [];
for (let number of numbers) {
    number = number + 1;
    evenNumbers.push(number);

}
// console.log(evenNumbers);
// using map method

const even = numbers.map(number => number + 1);
// console.log(even);


// practice problem ----> 2

const array = [33, 50, 79, 78, 90, 101, 30];

const divisible = array.filter(arr => arr % 10 === 0);
const divisible2 = array.find(arr => arr % 10 === 0);
// console.log(divisible);
// console.log(divisible2);

// practice problem ---> 3

const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
]
const senior = instructor.filter(item => item.position == 'Senior')
const seniorName = senior.map(item => item.name)
// console.log(seniorName);

// practice problem ----> 4






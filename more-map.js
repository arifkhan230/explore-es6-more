const numbers = [12, 23, 21, 33];

const doubled = numbers.map(num => num * 2);
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);
const square = numbers.map(num => Math.pow(num, 2));
console.log(square);
const friends = [ 'Shakil', 'Shahid', 'imon']
const length = friends.map(frnd => frnd.length);
console.log(length)
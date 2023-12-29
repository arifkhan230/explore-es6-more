// filter selects elements based on a condition and returns an array with thr elements that fulfilled the condition.
const numbers = [12, 32, 44, 33, 11];
const player = [75, 65, 67, 72, 55, 59];
// const selected = player.filter( p => p > 60);
// const selected = player.filter( p => p % 2 === 1);
const selected = player.filter( p => p % 2 === 0);

// console.log(selected)

const friends = [ 'Shakil', 'Shahid', 'imon','samad'];
// const even = friends.filter( frnd => frnd.length % 2 === 0);
const odd = friends.filter( frnd => frnd.length % 2 === 1);
console.log(odd);
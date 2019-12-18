const Set = require('./js/Set')

const set = new Set();
const set1 = new Set();
set.add(1)
console.log(set.values)  // ["1"] 
console.log(set.has(1))  // true 
console.log(set.size) // 1 
set.add(3) 
set.add(5)
set.add(7)
set.add(9)
set1.add(2)
set1.add(4)
set1.add(6)
set1.add(7)
set1.add(8)

console.log(set.difference(set1).values)

console.log(set1.values)
console.log(set.values)





const CircleLinkedList = require('./js/CircleLinkedList')
const linkedList = new CircleLinkedList()

console.log(linkedList.isEmpty())
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)

linkedList.insert(3, 18)
linkedList.remove(24)
console.log(linkedList.size())
console.log(linkedList.toString())
console.log(linkedList.findIndex(6))



const LinkedList = require('./LinkedList').LinkedList
// import {LinkedList}from './LinkedList'
// //console.log(LinkedList)
class HashTable {

    constructor() {
        this.table = []
    }

    // 散列函数
    static loseloseHashCode(key) {
        let hash = 0
        for (let codePoint of key) {
            hash += codePoint.charCodeAt()
        }
        return hash % 37
    }

    // 修改和增加元素
//  put(key, value) {
//      const position = HashTable.loseloseHashCode(key)
//      console.log(`${position} - ${key}`)
//      this.table[position] = value
//  }
//
//  get(key) {
//      return this.table[HashTable.loseloseHashCode(key)]
//  }
//
//  remove(key) {
//      this.table[HashTable.loseloseHashCode(key)] = undefined
//  }
	put(key, value) {
    	const position = HashTable.loseloseHashCode(key)
    	if (this.table[position] === undefined) {
        	this.table[position] = new LinkedList()
    	}
    	this.table[position].append({ key, value })
	}

	get(key) {
    	const position = HashTable.loseloseHashCode(key)
    	if (this.table[position] === undefined) return undefined
    	const getElementValue = node => {
        	if (!node && !node.element) return undefined
        	if (Object.is(node.element.key, key)) {
            	return node.element.value
        	} else {
            	return getElementValue(node.next)
        	}
    	}
    	return getElementValue(this.table[position].head)
	}

	remove(key) {
    	const position = HashTable.loseloseHashCode(key)
    	if (this.table[position] === undefined) return undefined
    	const getElementValue = node => {
        	if (!node && !node.element) return false
        	if (Object.is(node.element.key, key)) {
            	this.table[position].remove(node.element)
            	if (this.table[position].isEmpty) {
                	this.table[position] = undefined
            	}
            	return true
        	} else {
            	return getElementValue(node.next)
        	}
    	}
    	return getElementValue(this.table[position].head)
	}
}
const hash = new HashTable()
hash.put('Gandalf',    'gandalf@email.com')
hash.put('John', 'johnsnow®email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron',    'aaronOemail.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana©email.com')
hash.put('Jonathan', 'jonathan@email.com')    
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue',    'sueOemail.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul©email.com')
hash.put('Nathan', 'nathan@email.com')
//const hash = new HashTable()
//hash.put('Surmon', 'surmon.me@email.com') // 19 - Surmon
//hash.put('John', 'johnsnow@email.com') // 29 - John
//hash.put('Tyrion', 'tyrion@email.com') // 16 - Tyrion
//
//// 测试get方法
//console.log(hash.get('Surmon')) // surmon.me@email.com
//console.log(hash.get('Loiane')) // undefined
console.log(hash)

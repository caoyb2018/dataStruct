const HashTable = require('./HashTable');
const LinkedList = require('./LinkedList').LinkedList;

class HashTable1 extends HashTable {
    constructor() {
        super()
    }

    put(key, value) {
        const position = HashTable.loseloseHashTable(key);
        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }
        this.table[position].append({ key, value })
    }

    get(key) {
        const position = HashTable.loseloseHashTable(key);
        if (this.table[position] === undefined) return undefined
        const getElementValue = node => {
            if (!node) {
                return undefined;
            } else {
                if (Object.is(node.element.key, key)) {
                    return node.element.value
                } else {
                    return getElementValue(node.next)
                }
            }
        }
        return getElementValue(this.table[position].head)
    }

    remove(key) {
        const position = HashTable.loseloseHashTable(key);
        if(this.table[position] === undefined ) return false
        const getElementValue = node => {
            if (!node) {
                return false
            } else {
                if (Object.is(key, node.element.key)) {
                    this.table[position].remove(node.element)
                    return true
                } else {
                    return getElementValue(node.next)
                }
            }
        }
        return getElementValue(this.table[position].head)
    }
}

module.exports = HashTable1
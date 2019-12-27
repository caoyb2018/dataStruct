class HashTable {
	constructor() {
		this.table = []
	}

	static loseloseHashTable(key) {
		let hash = 0
		for(let code of key) {
			hash = hash+code.charCodeAt()
		}
		hash = hash % 37
		return hash
	}

	put(key, value) {
		let position = HashTable.loseloseHashTable(key)
		this.table[position] = value
	}

	get(key) {
		let position = HashTable.loseloseHashTable(key)
		return this.table[position]
	}

	remove(key) {
		let position = HashTable.loseloseHashTable(key)
		this.table[position] = undefined
	}
}

module.exports = HashTable

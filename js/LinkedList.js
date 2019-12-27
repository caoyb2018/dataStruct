class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	append(element) {
		const node = new Node(element);
		if (this.head === null) {
			this.head = node
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node
		}
		this.length++
	}

	insert(position, element) {
		const node = new Node(element);
		if (position > -1 && position <= this.length) {
			if (position === 0) {
				node.next = this.head;
				this.head = node;
			} else {
				let current = this.head;
				let currentIndex = 0;
				while (currentIndex < position - 1) {
					currentIndex++;
					current = current.next;
				}
				let currentNext = current.next;
				node.next = currentNext;
				current.next = node
			}
			this.length++
			return true;
		} else {
			return false
		}
	}

	removeAt(position) {
		let current = this.head;
		let previous = null;
		let currentIndex = 0;
		if (position > -1 && position < this.length) {
			if (position === 0) {
				this.head = this.head.next
			} else {
				while (currentIndex < position) {
					currentIndex++;
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.length--;
			return current.element
		} else {
			return null
		}
	}

	findIndex(element) {
		let current = this.head;
		let currentIndex = 0;
		while (current) {
			
			if (current.element === element) {
				return currentIndex
			} else {
				current = current.next;
				currentIndex++;
			}
		}
		return -1;
	}

	remove(element) {
		const index = this.findIndex(element)
		this.removeAt(index)
	}

	isEmpty() {
		return !this.length;
	}

	size() {
		return this.length;
	}

	toString() {
		let current = this.head;
		let result = ''
		while (current) {
			result += `${current.element} `;
			current = current.next
		}
		return result
	}
}

module.exports = {
	LinkedList,
	Node
};
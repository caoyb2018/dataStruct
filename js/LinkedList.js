class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}
export default class LinkedList {
	constructor() {
		this.head = null
		this.length = 0
	}
	append(element) {//当链表中没有没有元素，则插进来的这个元素为链表的头元素。否则就从链表头部元素开始一直遍历到最后一个元素。让最后一个元素的next指向需要插入的元素
		const node = new Node(element)
		let current = null
		if(this.head === null) {
			this.head = node
		} else {
			current = this.head
			while(current.next) {
				current = current.next
			}
			current.next = node
		}
		this.length++
	}
	insert(position, element) {//插入元素。
		if(position >= 0 && position <= this.length) {
			const node = new Node(element)
			let current = this.head
			let previous = null
			let index = 0
			if(position === 0) {//如果插入的元素在链表第0位即链表首位，则新加的元素的next指向当前的head，然后让链表的head元素指向新加的元素
				node.next=current
				this.head = node
				console.log(this.head)
			} else {//如果插入的元素不在链表的第0位，比如新加的元素要放在第4位，则通过index计数，找到第三位的元素，然后第三位的元素next指向新加的元素。同时新加元素的next指向第四位
				while(index++ < position) {
					previous = current
					current = current.next
				}
				node.next = current
				previous.next = node
			}
			this.length++
			return true
		}
		return false
	}
	removeAt(position) {//删除元素，返回被删除的元素
		if(position >=0 && position < this.length) {
			let current = this.head
			let previous = null
			let index = 0
			if(position === 0) {//如果被删除的元素是链表的首位。则直接把head指向链表的第二位就行了
				this.head = current.next
			} else {//如果被删除的元素不是链表的首位，则通过index计数。让删除元素的前一个元素的next指向被删除元素的下一个元素
				while(index++ < position) {
					previous = current
					current = current.next
				}
				previous.next = current.next
			}
			this.length--
			return current.element
		}
		return null
	}
	findIndex(element) {//根据元素查找链表。找到元素的位置
		let current = this.head
		let index = -1
		while(current) {
			if(element === current.element) {
				return index + 1
			}
			index++
			current = current.next
		}
		return -1
	}
	remove(element) {
		const index = this.findIndex(element)
		return this.removeAt(index)
	}

	isEmpty() {
		return !this.length
	}

	size() {
		return this.length
	}
	toString() {
		let current = this.head
		let string = ''
		while(current) {
			string += ` ${current.element}`
			current = current.next
		}
		return string
	}
}
//module.exports={
////	Node,
//	LinkedList
//}
const linkedList = new LinkedList()

//console.log(linkedList)
//linkedList.append(2)
//linkedList.append(6)
//linkedList.append(24)
//linkedList.append(152)
//linkedList.remove(2)
//
////linkedList.insert(2, 18)
//console.log(linkedList)
//console.log(linkedList.findIndex(24))
//console.log(linkedList.toString())

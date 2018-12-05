class Node {
    constructor(element) {
        this.element = element
        this.prev = null
        this.next = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
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
			node.prev=current
			current.next = node
		}
		this.length++
	}
    insert(position, element) {
        if (position >= 0 && position <= this.length){
            const node = new Node(element)
            let current = this.head
            let previous = null
            let index = 0
            // 首位
            if (position === 0) {
                if (!head){
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    this.head = node
                    current.prev = node
                }
            // 末位
            } else if (position === this.length) {
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            // 中位
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.length++
            return true
        }
        return false
    }

    // 移除指定位置元素
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head
            let previous = null
            let index = 0

            // 首位
            if (position === 0) {
                this.head = this.head.next
                this.head.prev = null
                if (this.length === 1) {
                    this.tail = null
                }

            // 末位
            } else if (position === this.length - 1) {
                this.tail = this.tail.prev
                this.tail.next = null

            // 中位
            } else {
                while (index++ < position) {
                     previous = current
                     current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
         }
         this.length--
         return current.element
        } else {
            return null
        }
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
const linkedList = new DoublyLinkedList()
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)
linkedList.remove(2)

//linkedList.insert(2, 18)
console.log(linkedList)
//console.log(linkedList.findIndex(24))
//console.log(linkedList.toString())
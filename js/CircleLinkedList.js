const { Node, LinkedList} = require('./LinkedList')

class CircleLinkedList extends LinkedList {
    constructor() {
        super()
    }

    append(element){
        const node = new Node(element);
        if(!this.length){
            node.next = node;
            this.head = node;
        }else {
            let current = this.head;
            while(current.next !== this.head) {
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }
        this.length++;
    }

    insert(position, element){
        const node = new Node(element);
        if(position >= 0 && position <= this.length) {
            if(position !== 0 && position !== this.length){
                let current = this.head;
                let currentindex = 0;
                while(currentindex < position-1) {
                    current = current.next;
                    currentindex++;
                }
                node.next = current.next;
                current.next = node;
            }else {
                let currentTail = this.head;
                while(currentTail.next !== this.head) {
                    currentTail = currentTail.next
                }
                currentTail.next = node;
                node.next = this.head;
                if(position === 0){
                    this.head = node;
                }
            }
        }else {
            return false;
        }
    }

    removeAt(position){
        let current = this.head
        if(position >= 0 && position < this.length){
            if(position === 0) {
                let currentTail = this.head;
                while(currentTail.next !== this.head) {
                    currentTail = currentTail.next
                }
                this.head = this.head.next;
                this.currentTail = this.head;
            }else {
                let currentIndex = 0;
                while(currentIndex < position-1) {
                    current = current.next;
                    currentIndex++;
                }
                current.next = current.next.next;
            }
            this.length --;
            return current;
        }else {
            return null;
        }
    }

	toString() {
		let current = this.head.next;
		let result = `${this.head.element} `
		while (current != this.head) {
			result += `${current.element} `;
			current = current.next
		}
		return result
	}
}

module.exports = CircleLinkedList;
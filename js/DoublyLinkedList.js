const { Node, LinkedList } = require('./LinkedList')
class DocbleNode extends Node {
    constructor(element) {
        super(element);
        this.prev = null
    }
}

class DoubleLinkedList extends LinkedList {
    constructor() {
        super()
        this.tail = null;
    }

    append(element) {
        const node = new DocbleNode(element);
        if(!this.length) {
            this.head = node;
        }else if(this.length === 1){
            this.head.next = node;
            node.prev = this.head;
            this.tail = node;
        }else {
            const prev = this.tail;
            prev.next = node;
            node.prev = prev;
            this.tail = node;
        }
        this.length++;
    }

    insert(position, element) {
        if(position >=0 && position<=this.length) {
            const node = new DocbleNode(element)
            if(position === 0){
                const next = this.head;
                next.prev = node;
                node.next = next;
                this.head = node
            }else if(position === this.length) {
                const prev = this.tail;
                prev.next = node;
                node.prev = prev;
                this.tail = node
            }else {
                let current = this.head;
                let currentIndex = 0;
                while(currentIndex < position) {
                    current = current.next;
                    currentIndex++;
                }
                const prev = current.prev;
                prev.next = node;
                node.prev = prev;
                node.next = current;
                current.prev = node
            }
            this.length++;
            return true;
        }else {
            return false;
        }
    }

    removeAt(position) {
        if(position >= 0 && position < this.length){
            let current = this.head;
            let currentIndex = 0;
            if(position === 0) {
                this.head = this.head.next;
                this.head.prev = null;
                if(this.length === 1){
                    this.tail = null;
                }
            }else if(position === this.length-1) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }else {
                while(currentIndex < position){
                    current = current.next;
                    currentIndex++
                }
                current.prev.next = current.next;
                current.next.prev = current.prev
            }
            this.length--;
            return current.element;
        }else {
            return null;
        }
    }
}

module.exports = DoubleLinkedList;
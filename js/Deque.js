const Queue = require('./Queue');

class Deque extends Queue {
    constructor() {
        super()
    }

    addFront(element) {
        if(this.isEmpty){
            this.items[this.count] = element;
            this.count++;
        }else if(this.lowestCount !== 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element
        }else {
            for(let i = this.count; i>0; i--){
                this.items[i] = this.items[i-1]
            }
            this.count++;
            this.items[0] = element;
        }
    }

    removeBack() {
        if(this.isEmpty){
            return ''
        }
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }
}

module.exports = Deque;
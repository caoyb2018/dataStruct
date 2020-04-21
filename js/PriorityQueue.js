const Queue = require('./Queue');

class PriorityQueue extends Queue{

    constructor() {
        super()
    }

    enqueue(element, priority){
        const queueElement = { element, priority }
        if (this.isEmpty) {
            this.items[this.count] = queueElement;
            this.count++
        } else {
            let prevIndex = this.lowestCount;
            for(let i=this.lowestCount; i<this.count;i++){
                if(priority > this.items[i].priority){
                    prevIndex = i;
                    break;
                }
            }
            for(let j = this.count; j>prevIndex; j--) {
                this.items[j] = this.items[j-1]
            }
            this.items[prevIndex] = queueElement
        }
    }
}

module.exports = PriorityQueue
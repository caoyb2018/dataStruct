class Queue {
	constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(){
        if(this.isEmpty()) {
            return ''
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result
    }

    peek(){
        if(this.isEmpty()){
            return ''
        }
        return this.items[this.lowestCount]
    }

    clear(){
        this.count = 0;
        this.items = {};
        this.lowestCount = 0;
    }

    get size(){
        return this.count - this.lowestCount
    }

    get isEmpty(){
        return this.count = this.lowestCount === 0
    }

    toString() {
        if(this.isEmpty()) {
            return ''
        }
        let objString = ''
        for(let i = this.lowestCount; i<this.count; i++){
            objString = objString+ this.items[i]
        }
        return objString;
    }
}

module.exports = Queue
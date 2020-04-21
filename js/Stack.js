class Stack {

    constructor() {
        this.count = 0;
        this.items = {};
    }

    // 入栈
    push(element) {
         this.items[count] = element;
         this.count++
    }

    // 出栈
    pop() {
        if(this.isEmpty{
            return undefined;
        }
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }

    // 末位
    get peek() {
        return this.isEmpty ? undefined : this.items[this.count]
    }

    // 是否为空栈
    get isEmpty() {
        return this.count === 0
    }

    // 尺寸
    get size() {
        return this.count;
    }

    // 清空栈
    clear() {
        this.count = 0;
        this.items = {}
    }

    // 打印栈数据
    toString() {
        if(this.isEmpty) {
            return ''
        }
        let objString = ''
        for(let i=0; i<this.count; i++) {
            objString = objString + this.items[i] 
        }
        return objString
    }
}

module.exports=Stack
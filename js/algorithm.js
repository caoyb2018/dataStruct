let array = [3,5,1,4,2]

Array.prototype.bubbleSort = function() {
    for(let i=0;i<this.length;i++){
        for(let j=0;j<this.length-i-1;j++){
            if(this[j]>this[j+1]){
                let num = this[j]
                this[j] = this[j+1]
                this[j+1] = num
            }
        }
    }
}

Array.prototype.selectionSort = function() {
    for(let i=0;i<this.length;i++) {
        let minNum = this[i] 
        for(let j=i;j<this.length;j++) {
            if(minNum > this[j]){
                let num = this[i];
                this[i] = this[j];
                this[j] = num
            }
        }
    }
}

Array.prototype.insertionSort = function() {
    let i;
    let temp;
    let j;
    for(i=1;i<this.length;i++) {
        temp = this[i];
        j = i;
        while(j >= 0 && this[j-1]> temp) {
            this[j] = this[j-1];
            j--;
        }
        this[j] = temp;
        console.log(this.join(','))
    }
    return this
}

Array.prototype.mergeSort = function() {
    const merge = function(left, right) {
        const res = [];
        let il = 0;
        let ir = 0;
        while(il < left.length && ir < right.length) {
            if(left[il] > right[ir]) {
                res.push(right[ir]);
                ir++;
            }else {
                res.push(left[il]);
                il++;
            }
        }
        while(il < left.length) {
            res.push(left[il]);
            il++;
        }
        while(ir < right.length) {
            res.push(right[ir]);
            ir++;
        }
        return res;
    }
    const mergeSortRec = function(array) {
        if(array.length === 1) {
            return array
        }
        const mid = Math.floor(array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid, array.length);
        return merge(mergeSortRec(left), mergeSortRec(right));
    }
    return mergeSortRec(this)
}

Array.prototype.quickSort = function() {
    const partition = (array, left, right) => {
        var pivot = array[Math.floor((right + left) / 2)]
        let i = left
        let j = right
        while (i <= j) {
            while (array[i] < pivot) {
                i++
            }
            while (array[j] > pivot) {
                j--
            }
            if (i <= j) {
                let aux = array[i]
                array[i] = array[j]
                array[j] = aux
                i++
                j--
            }
        }
        return i
    }
    const quick = (array, left, right) => {
        let index
        if (array.length > 1) {
            index = partition(array, left, right)
            if (left < index - 1) {
                quick(array, left, index - 1)
            }
            if (index < right) {
                quick(array, index, right)
            }
        }
    }
    quick(this, 0, this.length - 1)
    return this
}

// array.bubbleSort()
// array.selectionSort()
// array.insertionSort()
// array.mergeSort()
array.quickSort()

console.log(array)
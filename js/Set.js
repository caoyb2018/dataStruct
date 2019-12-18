class Set {
    constructor() {
        this.items = {}
    }

    has(value) {
        return this.items.hasOwnProperty(value);
    }

    add(value) {
        if(!this.has(value)){
            this.items[value] = value;
            return true;
        }else {
            return false;
        }
    }

    union(otherSet) {
        const unionSet = new Set();
        this.values.forEach((v, i) => unionSet.add(this.values[i]))
        otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
        return unionSet
    }

    intersection(otherSet) {
        const intersectionSet = new Set()
        this.values.forEach((v, i) => {
            if(otherSet.has(v)){
                intersectionSet.add(v)
            }
        })
        return intersectionSet
    }

    difference(otherSet) {
        const differenceSet = new Set()
        this.values.forEach((v, i) => {
            if(!otherSet.has(v)){
                differenceSet.add(v)
            }
        })
        return differenceSet
    }

    subset(otherSet) {
        if(this.size < otherSet.size) {
            return false;
        } else {
            return !this.values.some(v => !otherSet.has(v))
        } 
    }

    remove(value) {
        if(this.has(value)) {
            delete this.items[value]
            return true
        }
        return false;
    }

    get size(){
        return Object.keys(this.items).length
    }

    get values() {
        return Object.keys(this.items)
    }
}

module.exports = Set;
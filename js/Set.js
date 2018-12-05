class Set {
    constructor() {//set在js中的实质上就是一个对象
        this.items = {}
    }
    has(value) {//hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
        return this.items.hasOwnProperty(value)
    }
    add(value) {
        if (!this.has(value)) {//如果集合中没有这一项的话就添加。set中的项不重复
            this.items[value] = value
            return true
        }     
        return false
    }
    remove(value) {
        if (this.has(value)) {
            delete this.items[value]//delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。
            return true
        }
        return false
    }
    get size() {
        return Object.keys(this.items).length//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。
    }
    get values() {
        return Object.keys(this.items)
    }
    union(otherSet) {// Set 类实现一个并集方法
    	const unionSet = new Set()
    	this.values.forEach((v, i) => unionSet.add(this.values[i]))
    	otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
    	return unionSet
	}
    intersection(otherSet) {//Set 类实现一个交集方法
	    const intersectionSet = new Set()
	    this.values.forEach((v, i) => {
        	if (otherSet.has(v)) {
            	intersectionSet.add(v)
        	}
    	})
    	return intersectionSet
	}
    difference(otherSet) {//Set 类实现一个差集方法
    	const differenceSet = new Set()
    	this.values.forEach((v, i) => {
        	if (!otherSet.has(v)) {
            	differenceSet.add(v)
        	}
    	})
    	return differenceSet
	}
    subset(otherSet) {// Set 类实现一个子集方法
    	if (this.size > otherSet.size) {
        	return false
    	} else {
        	return !this.values.some(v => !otherSet.has(v))
    	} 
	}
}
const set = new Set()
set.add(1)
console.log(set.values)  // ["1"] 
console.log(set.has(1))  // true 
console.log(set.size) // 1 
set.add(2) 
console.log(set.values)  // ["1", "2"] 
console.log(set.has(2))  // true 
console.log(set.size) // 2 
set.remove(1) 
console.log(set.values) // ["2"] 
set.remove(2) 
console.log(set.values) // []
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new Node(key)
        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }
    inOrderTraverse(callback) {//中序遍历算法
    	const inOrderTraverseNode = (node, callback) => {
        	if (node !== null) {
            	inOrderTraverseNode(node.left, callback)
            	callback(node.key)
            	inOrderTraverseNode(node.right, callback)
        	}
    	}
    	inOrderTraverseNode(this.root, callback)
	}
    preOrderTraverse(callback) {//先序遍历
    	const preOrderTraverseNode = (node, callback) => {
        	if (node !== null) {
            	callback(node.key)
            	preOrderTraverseNode(node.left, callback)
            	preOrderTraverseNode(node.right, callback)
        	}
    	}
    	preOrderTraverseNode(this.root, callback)
	}
    postOrderTraverse(callback) {//后序遍历
    	const postOrderTraverseNode = (node, callback) => {
        	if (node !== null) {
            	postOrderTraverseNode(node.left, callback)
           		postOrderTraverseNode(node.right, callback)
            	callback(node.key)
        	}
    	}
    	postOrderTraverseNode(this.root, callback)
	}
}
const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.preOrderTraverse(value => { console.log(value) })
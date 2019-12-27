class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(key) {
		const node = new Node(key)
		const insertNode = (node, newNode) => {
			if(node.key < newNode.key) {
				if(node.right === null) {
					node.right = newNode
				}
				else {
					insertNode(node.right, newNode)
				}
			}else {
				if(node.left === null) {
					node.left = newNode
				}else {
					insertNode(node.left, newNode)
				}
			}
		}
		if(this.root === null) {
			this.root = node
		}else {
			insertNode(this.root, node)
		}
	}

	inOrderTraverse(callback) {
		const inOrderTraverseNode = (node, callback) => {
			if (node !== null) {
				inOrderTraverseNode(node.left, callback)
				callback(node.key)
				inOrderTraverseNode(node.right, callback)
			}
		}
		inOrderTraverseNode(this.root, callback)
	}
	
	preOrderTraverse(callback) {
		const preOrderTraverseNode = (node, callback) => {
			if (node !== null) {
				callback(node.key)
				preOrderTraverseNode(node.left, callback)
				preOrderTraverseNode(node.right, callback)
			}
		}
		preOrderTraverseNode(this.root, callback)
	}

	postOrderTraverse(callback) {
		const postOrderTraverseNode = (node, callback) => {
			if (node !== null) {
				postOrderTraverseNode(node.left, callback)
				postOrderTraverseNode(node.right, callback)
				callback(node.key)
			}
		}
		postOrderTraverseNode(this.root, callback)
	}

	min(node) {
		const minNode = node => {
			return node ? (node.left ? minNode(node.left) : node) : null
		}
		return minNode(node || this.root)
	}

	max(node) {
		const maxNode = node => {
			return node ? (node.right ? maxNode(node.right) : node) : null
		}
		return maxNode(node || this.root)
	}
	
	search(key) {
		const searchNode = (node, key) => {
			if (node === null) return false
			if (node.key === key) return node
			return searchNode((key < node.key) ? node.left : node.right, key)
		}
		return searchNode(this.root, key)
	}
}

module.exports = BinarySearchTree
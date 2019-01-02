const Dictionary=require('../js/Dictnory')
console.log(Dictionary)
class Graph{
    constructor() {
        this.vertices = []
        this.adjList = new Dictionary()
    }
    // 添加顶点
    addVertex(v) {
        this.vertices.push(v)
        this.adjList.set(v, [])
    }

    // 添加线
    addEdge(v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    toString() {
        return this.vertices.reduce((r, v, i) => {
            return this.adjList.get(v).reduce((r, w, i) => {
                return r + `${w} `
            }, `${r}\n${v} => `)
        }, '')
    }
}
const graph = new Graph()

;['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(c => graph.addVertex(c))

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())

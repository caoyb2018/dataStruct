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
    // bfs(v, callback) {//广度优先遍历
    //     const read = []
    //     const adjList = this.adjList
    //     let pending = [v || this.vertices[0]]
    //     const readVertices = vertices => {
    //         vertices.forEach(key => {
    //             read.push(key)
    //             pending.shift()
    //             adjList.get(key).forEach(v => {
    //                 if (!pending.includes(v) && !read.includes(v)) {
    //                     pending.push(v)
    //                 }
    //             })
    //             if (callback) callback(key)
    //             if (pending.length) readVertices(pending)
    //         })
    //     }
    //     readVertices(pending)
    // }
    bfs(v, callback) {//广度优先遍历升级版
        const read = []
        const distances = []
        const predecessors = []
        const adjList = this.adjList
        const pending = [v || this.vertices[0]]
        const readVertices = vertices => {
            vertices.forEach(key => {
                read.push(key)
                pending.shift()
                distances[key] = distances[key] || 0
                predecessors[key] = predecessors[key] || null
                adjList.get(key).forEach(v => {
                    if (!pending.includes(v) && !read.includes(v)) {
                        pending.push(v)
                        distances[v] = distances[key] + 1
                        predecessors[v] = key
                    }
                })
                if (callback) callback(key)
                if (pending.length) readVertices(pending)
            })
        }
        readVertices(pending)
        return { distances, predecessors }
    }
    distance(fromVertex) {
        const vertices = this.vertices
        const { distances, predecessors } = this.bfs(fromVertex)
        vertices.forEach(toVertex => {
            if (!!distances[toVertex]) {
                let preVertex = predecessors[toVertex]
                let slug = ''
                while (fromVertex !== preVertex) {
                    slug = `${preVertex} - ${slug}`
                    preVertex = predecessors[preVertex]
                }
                slug = `${fromVertex} - ${slug}${toVertex}`
                console.log(slug)
            }
        })
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
console.log(graph.bfs(graph.vertices[0], value => console.log('distance: ' + value))) 
graph.distance(graph.vertices[0])
console.log(graph.toString())

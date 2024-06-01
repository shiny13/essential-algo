const graphs = require('./graphs')

const bfs = (graph, start) => {
    const queue = [start]
    const visited = new Set()
    const result = []
    console.log('initial queue ', queue)

    while (queue.length) {
        const vertex = queue.shift()
        console.log('pop queue ', queue)
        console.log('vertex ', vertex)

        if (!visited.has(vertex)) {
            visited.add(vertex)
            result.push(vertex)
            console.log('visited ', visited)
            console.log('push result ', result)

            for (const neighbor of graph[vertex]) {
                queue.push(neighbor)
                console.log('push queue ', queue)
            }
        }
    }

    console.log('result ', result)
    return result
}

bfs(graphs.graph, 'A')

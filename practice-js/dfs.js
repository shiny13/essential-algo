const graphs = require('./graphs')

const dfs = function (graph, start) {
    const stack = [start]
    const visited = new Set()
    const result = []
    console.log('initial stack ', stack)

    while (stack.length) {
        const vertex = stack.pop()
        console.log('pop stack ', stack)
        console.log('vertex ', vertex)

        if (!visited.has(vertex)) {
            visited.add(vertex)
            result.push(vertex)
            console.log('visited ', visited)
            console.log('push result ', result)

            for (const neighbor of graph[vertex]) {
                stack.push(neighbor)
                console.log('push stack ', stack)
            }
        }
    }

    console.log('result ', result)
    return result
}

dfs(graphs.graph, 'A')

const graphs = require('./graphs')

const bfs = (node) => {
    if (!node) {
      return []
    }
  
    const queue = [node]
    const result = []
  
    while (queue.length) {
      const current = queue.shift()
      result.push(current.value)
  
      if (current.left) {
        queue.push(current.left)
      }
  
      if (current.right) {
        queue.push(current.right)
      }
    }
  
    return result
  }
  
  bfs(graphs.tree)
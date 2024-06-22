const graphs = require('./graphs')

const dfs= (node) => {
    if (!node) {
      return []
    }
  
    const stack = [node]
    const result = []
  
    while (stack.length > 0) {
      const current = stack.pop()
      result.push(current.value)
  
      if (current.right) {
        stack.push(current.right)
      }
  
      if (current.left) {
        stack.push(current.left)
      }
    }
  
    return result
  }
  
  dfs(tree)

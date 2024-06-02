# essential-algo
Essential practice for algorithms and data structures

The following graph is used for both BFS and DFS

```
const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};
```

```
A -- B -- C
|    |
D -- E -- F
```

The following code snippet in javascript represents the graph:
```
const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};
```

## BFS

```
const bfs = (graph, start) => {
  const queue = [start]
  const visited = new Set()
  const result = []

  while (queue.length) {
    const vertex = queue.shift()

    if (!visited.has(vertex)) {
      visited.add(vertex)
      result.push(vertex)

      for (const neighbor of graph[vertex]) {
        queue.push(neighbor)
      }
    }
  }

  return result
}

bfs(graph, 'A')
```

The BFS algorithm is implemented using a queue data structure, which holds the nodes that are to be processed in the order they were discovered.

The visited set is used to keep track of the nodes that have already been visited, and the result array stores the order in which the nodes were visited.

We start by adding the start node to the queue and processing it. Then, we add its neighbors to the queue and process them in the order they were added. We repeat this process until there are no more nodes to process.

Finally, we return the result array, which contains the nodes in the order they were visited by the BFS algorithm.

## DFS

```
const dfs = (graph, start) => {
  const stack = [start]
  const visited = new Set()
  const result = []

  while (stack.length) {
    const vertex = stack.pop()

    if (!visited.has(vertex)) {
      visited.add(vertex)
      result.push(vertex)

      for (const neighbor of graph[vertex]) {
        stack.push(neighbor)
      }
    }
  }

  return result
}

dfs(graph, 'A')
```

The DFS algorithm is implemented using a stack data structure, which holds the nodes that are to be processed in the order they were discovered.

The visited set is used to keep track of the nodes that have already been visited, and the result array stores the order in which the nodes were visited. We start by adding the start node to the stack and processing it.

Then, we add its neighbors to the stack and process them in the order they were added. We repeat this process until there are no more nodes to process. If we encounter a node that has already been visited, we simply skip it and continue to the next node.

Finally, we return the result array, which contains the nodes in the order they were visited by the DFS algorithm

## Tree traversal algorithms

The following tree will be used for this exercise:

```
const createNode = (value, left = null, right = null) => {
  return { value, left, right }
}

const tree = createNode(1,
  createNode(2,
    createNode(4),
    createNode(5)
  ),
  createNode(3,
    createNode(6),
    createNode(7)
  )
)
```

```
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
```

### BFS to traverse the tree using a queue

```
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

bfs(tree)
```

This BFS solution implements a breadth-first traversal of a tree using a queue data structure. The algorithm starts by adding the root node to the queue and processing it. Then, it dequeues the first node from the queue and adds its value to the result array.

The algorithm then checks if the dequeued node has a left child and enqueues it onto the queue if it exists. Next, it checks if the dequeued node has a right child and enqueues it onto the queue if it exists. The algorithm repeats this process until there are no more nodes on the queue.

If the input node is null, an empty array is returned. The result array contains the values of the nodes in the order they were visited by the BFS algorithm.

### DFS to traverse the tree using a queue

```
const dfs = (node) => {
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
```

This DFS solution implements a depth-first traversal of a tree using a stack data structure. The algorithm starts by adding the root node to the stack and processing it. Then, it pops the last node from the stack and adds its value to the result array.

The algorithm then checks if the popped node has a right child and pushes it onto the stack if it exists.

Next, it checks if the popped node has a left child and pushes it onto the stack if it exists. The algorithm repeats this process until there are no more nodes on the stack. If the input node is null, an empty array is returned.

The result array contains the values of the nodes in the order they were visited by the DFS algorithm.

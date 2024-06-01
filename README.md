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

The BFS algorithm is implemented using a queue data structure, which holds the nodes that are to be processed in the order they were discovered.

The visited set is used to keep track of the nodes that have already been visited, and the result array stores the order in which the nodes were visited.

We start by adding the start node to the queue and processing it. Then, we add its neighbors to the queue and process them in the order they were added. We repeat this process until there are no more nodes to process.

Finally, we return the result array, which contains the nodes in the order they were visited by the BFS algorithm.




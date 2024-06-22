const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
  };

  const createNode = (value, left = null, right = null) => {
    return { value, left, right };
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
  );

  module.exports = { graph, tree }

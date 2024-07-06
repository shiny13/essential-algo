# Binary Tree

Binary tree is a tree data structure(non-linear) in which each node can have at most two children which are referred to as the left child and the right child. 

The topmost node in a binary tree is called the root, and the bottom-most nodes are called leaves. A binary tree can be visualized as a hierarchical structure with the root at the top and the leaves at the bottom.

## Operations On Binary Tree

### 1. Insertion in Binary Tree

We can insert a node anywhere in a binary tree by inserting the node as the left or right child of any node or by making the node as root of the tree.

Algorithm to insert a node in a Binary Tree:

- Check if there is a node in the binary tree, which has missing left child. If such a node exists, then insert the new node as its left child.
- Check if there is a node in the binary tree, which has missing right child. If such a node exists, then insert the new node as its right child.
-If we don’t find any node with missing left or right child, then find the node which has both the children missing and insert the node as its left or right child.

### 2. Traversal of Binary Tree

Traversal of Binary Tree involves visiting all the nodes of the binary tree. Tree Traversal algorithms can be classified broadly into two categories:

    Depth-First Search (DFS) Algorithms
    Breadth-First Search (BFS) Algorithms

Depth-First Search (DFS) algorithms:

- Preorder Traversal (current-left-right): Visit the current node before visiting any nodes inside the left or right subtrees. Here, the traversal is root – left child – right child. It means that the root node is traversed first then its left child and finally the right child.
- Inorder Traversal (left-current-right): Visit the current node after visiting all nodes inside the left subtree but before visiting any node within the right subtree. Here, the traversal is left child – root – right child.  It means that the left child is traversed first then its root node and finally the right child.
- Postorder Traversal (left-right-current): Visit the current node after visiting all the nodes of the left and right subtrees.  Here, the traversal is left child – right child – root.  It means that the left child has traversed first then the right child and finally its root node.

Breadth-First Search (BFS) algorithms:

- Level Order Traversal:  Visit nodes level-by-level and left-to-right fashion at the same level. Here, the traversal is level-wise. It means that the most left child has traversed first and then the other children of the same level from left to right have traversed.

### 3. Deletion in Binary Tree

We can delete any node in the binary tree and rearrange the nodes after deletion to again form a valid binary tree.

Algorithm to delete a node in a Binary Tree:

- Starting at the root, find the deepest and rightmost node in the binary tree and the node which we want to delete. 
- Replace the deepest rightmost node’s data with the node to be deleted. 
- Then delete the deepest rightmost node.

### 4. Searching in Binary Tree

We can search for an element in the node by using any of the traversal techniques.

Algorithm to search a node in a Binary Tree:

- Start from the root node.
- Check if the current node’s value is equal to the target value.
- If the current node’s value is equal to the target value, then this node is the required node.
- Otherwise, if the node’s value is not equal to the target value, start the search in the left and right child.
- If we do not find any node whose value is equal to target, then the value is not present in the tree.

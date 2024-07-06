// Node class to define the structure of the node
class Node
{
    constructor(item)
    {
        this.key = item;
        this.left = this.right = null;
    }
}

// Function to insert nodes
function insert(root, data) {
    // If tree is empty, new node becomes the root
    if (root === null) {
        root = new Node(data);
        return root;
    }
    // queue to traverse the tree and find the position to
    // insert the node
    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const temp = q.shift();
        // Insert node as the left child of the parent node
        if (temp.left === null) {
            temp.left = new Node(data);
            break;
        }
        // If the left child is not null push it to the
        // queue
        else
            q.push(temp.left);
        // Insert node as the right child of parent node
        if (temp.right === null) {
            temp.right = new Node(data);
            break;
        }
        // If the right child is not null push it to the
        // queue
        else
            q.push(temp.right);
    }
    return root;
}

/* function to delete the given deepest node
(d_node) in binary tree */
function deletDeepest(root, d_node) {
    const q = [];
    q.push(root);
    // Do level order traversal until last node
    let temp;
    while (q.length !== 0) {
        temp = q.shift();
        if (temp === d_node) {
            temp = null;
            delete d_node;
            return;
        }
        if (temp.right) {
            if (temp.right === d_node) {
                temp.right = null;
                delete d_node;
                return;
            }
            else
                q.push(temp.right);
        }
        if (temp.left) {
            if (temp.left === d_node) {
                temp.left = null;
                delete d_node;
                return;
            }
            else
                q.push(temp.left);
        }
    }
}

/* function to delete element in binary tree */
function deletion(root, key) {
    if (!root)
        return null;
    if (root.left === null && root.right === null) {
        if (root.data === key)
            return null;
        else
            return root;
    }
    const q = [];
    q.push(root);
    let temp;
    let key_node = null;
    // Do level order traversal to find deepest
    // node(temp) and node to be deleted (key_node)
    while (q.length !== 0) {
        temp = q.shift();
        if (temp.data === key)
            key_node = temp;
        if (temp.left)
            q.push(temp.left);
        if (temp.right)
            q.push(temp.right);
    }
    if (key_node !== null) {
        const x = temp.data;
        key_node.data = x;
        deletDeepest(root, temp);
    }
    return root;
}

// Inorder tree traversal (Left - Root - Right)
function inorderTraversal(root) {
    if (!root)
        return;
    inorderTraversal(root.left);
    console.log(root.data + " ");
    inorderTraversal(root.right);
}

// Preorder tree traversal (Root - Left - Right)
function preorderTraversal(root) {
    if (!root)
        return;
    console.log(root.data + " ");
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

// Postorder tree traversal (Left - Right - Root)
function postorderTraversal(root) {
    if (root === null)
        return;
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    console.log(root.data + " ");
}

// Function for Level order tree traversal
function levelorderTraversal(root) {
    if (root === null)
        return;

    // Queue for level order traversal
    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const temp = q.shift();
        console.log(temp.data + " ");
        // Push left child in the queue
        if (temp.left)
            q.push(temp.left);
        // Push right child in the queue
        if (temp.right)
            q.push(temp.right);
    }
}

/* Driver function to check the above algorithm. */
let root = null;
// Insertion of nodes
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 30);
root = insert(root, 40);

console.log("Preorder traversal: ");
preorderTraversal(root);

console.log("\nInorder traversal: ");
inorderTraversal(root);

console.log("\nPostorder traversal: ");
postorderTraversal(root);

console.log("\nLevel order traversal: ");
levelorderTraversal(root);

// Delete the node with data = 20
root = deletion(root, 20);

console.log("\nInorder traversal after deletion: ");
inorderTraversal(root);

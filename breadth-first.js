// Tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function bfsTree(root) {
    if (root === null) {
        return;
    }
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.value);  

        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
}


//      1
//     / \
//    2   3
//   / \
//  4   5
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

bfsTree(root);


// Graph

function bfsGraph(graph, start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const node = queue.shift();
        if (!visited.has(node)) {
            console.log(node); 
            visited.add(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
}

// adjacency list
// {
//    'A': ['B', 'C'],
//    'B': ['A', 'D', 'E'],
//    'C': ['A', 'F'],
//    'D': ['B'],
//    'E': ['B', 'F'],
//    'F': ['C', 'E']
// }
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};


bfsGraph(graph, 'A');

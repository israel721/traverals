// Tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function dfsTree(node) {
    if (node === null) {
        return;
    }
    console.log(node.value);  
    dfsTree(node.left);  
    dfsTree(node.right);  
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

dfsTree(root);


// Graph

function dfsGraph(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start); 

    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfsGraph(graph, neighbor, visited);
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

dfsGraph(graph, 'A');

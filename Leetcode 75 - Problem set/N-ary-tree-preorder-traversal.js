/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

 


var preorder = function(root) {

    let current = root;
    let visited = [];

    function traverse(node){
    //  console.log('in traverse');
    //  console.log('node: ', node);
    if (!node) return visited;
        if(node.val !== null) visited.push(node.val);
    //  console.log('visited: ', visited); 
        for (let x = 0; x < node.children.length; x++){
            traverse(node.children[x]);
        }
        return visited;
    }
    
    return traverse(current);
    
};

Runtime 142 ms Beats 35.48%
Memory 45 MB Beats 79.35%

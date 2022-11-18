/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 //The tricky part here is how to initialize a new array and push values 
var levelOrder = function(root) {

    let levels = [];

    if (!root) return levels;

    function traverse(node, level){

        if(levels.length === level){
            levels.push([]);
        }

        levels[level].push(node.val);

        if (node.left){
            traverse(node.left, level+1);
        }
        if (node.right){
            traverse(node.right, level+1);
        }

        return levels;
    }

    return traverse(root, 0);


};

Runtime 111 ms Beats 40%
Memory 44.4 MB Beats 30.98%

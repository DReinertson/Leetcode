/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    
    let current = node;
    
    while (current.next !== null){
        if (current.next.next === null){
            current.val = current.next.val;
            current.next = null;
        } else{
            current.val = current.next.val;
            current = current.next;            
        }
    }
    
};

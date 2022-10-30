/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

//Traverse the list until the last node (current.next === null). will keep track of original head node (in these cases, it'll be 1) and say 1.next = to current
var reorderList = function(head) {
    let currentNode = head;
    let previousNode = null;
    let nextNode = currentNode.next;
    let tempHead;
    
    while (currentNode !== null){
        if (currentNode.next === null){
            head.next = currentNode;
            currentNode.next = nextNode;
            currentNode = currentNode.next;
        } else{
            currentNode = currentNode.next;
        }
    }
};

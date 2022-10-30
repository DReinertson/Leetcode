/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Traverse down list, having a counter increment as you proceed (start counter at 1?). When getting to n, remove node, and set previousNodes.next to current.next
var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    let previousNode = null;
    let nextNode = null;
    let counter = 0;
    
    while (currentNode){
        if (counter === n){
            let temp = currentNode.next;
            previousNode.next = temp;
            break;
        } else {
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }
    
    return head;
};

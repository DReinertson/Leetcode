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

//how do you detect the node from the end of the list? 
var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    let previousNode = null;
    let nextNode = null;
    let counter = 0;
    let remove;
    
    while (currentNode){
        if (counter === n){
            remove = true;
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter++;            
        } else {
            if (remove){
                let temp = currentNode.next;
                previousNode.next = temp;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }
    
    return head;
};

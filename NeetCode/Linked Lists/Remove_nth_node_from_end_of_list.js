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
    let nextNode = null;
    let previousNode = null;
    let counter = 1;
    let length = 0;
    let target = n-1;
    
    
    
    while (currentNode){
        currentNode = currentNode.next;
        length++;
    }  
    console.log('length: ', length);
    
    currentNode = head;
    
    while (currentNode){
        console.log('counter: ', counter);
        console.log('target: ', target);
        if(counter === (length - target)){
            if (counter === 1 && (length-target === 1)){
                head = null;
                break;
            }else{
                previousNode.next = currentNode.next;
                return head;
            }
        } else {
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter++; 
        }
    }
    return head;
};

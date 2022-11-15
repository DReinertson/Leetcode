/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if (head === null){
        return head; 
    }

    let prev = null;
    let current = head;
    let next = head;

    while (current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; 


};

Runtime 137 ms Beats 5.33%
Memory 44.2 MB Beats 61.30%

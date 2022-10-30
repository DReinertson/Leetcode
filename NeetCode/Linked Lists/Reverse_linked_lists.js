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
    
    let current = head;
    let prev = null;
    let next = null;
    
    while (current){
        next = current.next; //next = 2
        current.next = prev; // current.next = null
        prev = current; // prev = 1
        current = next; // current = 2
        next = null; // next = null
    }
    
    head = prev;
    return head;
    
};

Runtime: 100 ms, faster than 64.03% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44.3 MB, less than 43.10% of JavaScript online submissions for Reverse Linked List.

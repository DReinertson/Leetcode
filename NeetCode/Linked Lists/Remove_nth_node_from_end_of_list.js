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
var removeNthFromEnd = function(head, n) {
    
//Create dummy list
    
    let dum = new ListNode(null);
    
    dum.next = head;
    
    //will create two pointers
    
    let slow = dum;
    let fast = head;
    
    for (let x = 0; x < n; x++){
        fast = fast.next;
    }
    
    while (fast){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return dum.next;
    
};

Runtime: 108 ms, faster than 39.07% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 43.7 MB, less than 12.24% of JavaScript online submissions for Remove Nth Node From End of List.

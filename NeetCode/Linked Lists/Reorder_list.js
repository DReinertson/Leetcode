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
    let slow = head;
    let fast = head; 
    
    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let prev = null; 
    let current = slow;
    
    //reverse the 2nd half of the LL.
    while (current){
        let temp = current.next; //temp = 3,4,5 || temp = 4,5
        current.next = prev; //current.next = null || current.next = 3,4,5
        prev = current; // prev = 3,4,5 || prev = 4,5
        current = temp; // current = 3,4,5 || current = 4,5
    }
    
    let first = head;
    let second = prev;
    
    while(second.next){
        let temp = first.next;
        first.next = second;
        first = temp;
        
        temp = second.next;
        second.next = first;
        second = temp;
    }
}

Runtime: 176 ms, faster than 26.96% of JavaScript online submissions for Reorder List.
Memory Usage: 50.3 MB, less than 32.63% of JavaScript online submissions for Reorder List.

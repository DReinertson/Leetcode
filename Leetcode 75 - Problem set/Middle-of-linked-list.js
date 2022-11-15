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

 //could figure out length of linked list and then go to the middle number, but would require two loops, one to find the length, one to find the value with said length/2;


var middleNode = function(head) {
    let slow = fast = head;

    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

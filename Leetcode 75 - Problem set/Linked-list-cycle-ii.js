/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //A couple things that I need to keep track of. I need to keep track of each nodes index, since I need to return the index in which the tail.next points to. 

 //If I knew which one was the tail, I could then start a counter that would increment between where the cycle starts and the tail, to give me where the cycle starts. 
var detectCycle = function(head) {
    let map1 = new Map();
    let temp = head;

    while (temp !== null){
        if (map1.has(temp)){
            return temp;
        } else{
            map1.set(temp, 0);
            temp = temp.next;
        }
    }

    return null;
};

Runtime 119 ms Beats 64.88%
Memory 45.3 MB Beats 29.93%

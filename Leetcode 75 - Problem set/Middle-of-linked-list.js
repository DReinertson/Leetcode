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
    let temp = head;
    let length = 0;
    let count = 1;
    let temp2 = head;

    while (temp){
        length++;
        temp = temp.next;
    }

    let mid = Math.ceil(length/2);

    console.log('length: ', length);
    console.log('mid: ', Math.ceil(length/2));
    while(count !== mid){
        count++;
        temp2 = temp2.next;
    }

    if (length % 2 === 0){
        return temp2.next;
    } else{
        return temp2;
    }
};

Runtime 92 ms Beats 56.79%
Memory 42.5 MB Beats 6.86%

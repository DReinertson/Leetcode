/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let dummy = new ListNode(null);
    let currentNode = dummy;
    let overflow = false;
    let sum;
    // console.log('dummy: ', currentNode.next);
    
    while (l1 && l2){
        if (overflow){
            console.log('l1 + l2 vals: ', l1.val, ' ', l2.val)
            sum = l1.val + l2.val + 1;
            console.log('sum-overflow: ', sum);
            console.log('currentNode: ', currentNode);
            console.log('currentNode.next: ', currentNode.next);
            
            if (sum > 9){
                currentNode.next = sum % 10;
                overflow = true;
            } else {
                currentNode.next = sum;
                overflow = false;
            }
            
        } else{
            sum = l1.val + l2.val;
            console.log('sum: ', sum % 10);
            console.log('currentNode: ', currentNode);
        
            if (sum > 9){
                console.log('in sum 9');
                currentNode.next = sum % 10;
                console.log('before overflow:');
                overflow = true;
                console.log('after overflow:');
            } else {
                currentNode.next = sum;
                overflow = false;
            }
        }
        
        console.log('before l1:');
        l1 = l1.next;
        console.log('before l2:');
        l2 = l2.next;
        console.log('before currentNode:');
        if (currentNode.next === undefined){
            currentNode.next = null;
        } else {
            currentNode = currentNode.next;
        }
        console.log('after currentNode:', currentNode);
        console.log('--------------------------');
        
    }
    
    console.log(dummy);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//Essentially need to traverse down both lists at the same time. Compare the values and add the lower one first to maintain the order and move that list onto the next node, but not the other one (This will prevent creating a list of incorrect order). 

//I'm having trouble with the creating of the List. 
var mergeTwoLists = function(list1, list2) {
    
    let list3 = new ListNode(0);
    let currentNode = list3;
    
    
    while (list1 !== null && list2 !== null){
        if (list1.val < list2.val){
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        
        currentNode = currentNode.next;
                
    } //End while
    
    if (list1 !== null){
        currentNode.next = list1; 
    } else if (list2 !== null){
        currentNode.next = list2;
    }
    
    return list3.next;
    
};

Runtime: 108 ms, faster than 61.42% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 44.4 MB, less than 35.12% of JavaScript online submissions for Merge Two Sorted Lists.

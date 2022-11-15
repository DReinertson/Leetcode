var mergeTwoLists = function(list1, list2) {
    
  //Create a new linkedList that will be the merging of the two lists
    let list3 = new ListNode(0);
    let currentNode = list3;
    
    //Loop through the linked lists until one reaches the end. Compare the values and add the lower valued linked list to the new linkedList
    while (list1 !== null && list2 !== null){
        if (list1.val < list2.val){
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }

        currentNode = currentNode.next;
    }
  
    //Add the remaining values of whatever linked list that didn't reach the end. 
    if (list1 !== null){
        currentNode.next = list1;
    }
    if (list2 !== null){
        currentNode.next = list2;
    }

    return list3.next;
    
};

// Runtime 110 ms Beats 57.61%
// Memory 44.5 MB Beats 16.39%

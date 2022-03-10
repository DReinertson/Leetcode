/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //two counters x and y to tell when it switches to a new number
    
    let start = 0;
    let y = start + 1;
    
    //Will need two variables, the first number that is being compared to and the number next to that.
    
    while (start < nums.length){
        if (nums[start] === nums[y]){
            nums.splice(y, 1);
        } else{
            start++;
            y++
        }
    }
    
};

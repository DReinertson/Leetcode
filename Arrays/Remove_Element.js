/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let x = 0; 
    let y = nums.length;
    
    while(x < y){
        if (nums[x] === val){
            nums[x] = nums[y-1];
            nums.splice(-1);
            
            y--;
        } else{
            x++;
        }
    }
    
};

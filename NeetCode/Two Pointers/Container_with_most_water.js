/**
 * @param {number[]} height
 * @return {number}
 */

//Need to find the largest area square/rectangle
    
//Need the values : Difference between indices and height. 

//Can't sort because 1. 
var maxArea = function(height) {
    
    let max = 0; 
    let current;
    let h;
    let left = 0; 
    let right = height.length-1;
    
    while (left < right){
        let diff = right - left;
        if (height[left] > height[right]){
            h = height[right];
            current = h*diff; 
            if (current > max){
                max = current;
            }
            right--;
        } else if (height[left] < height[right]){
            h = height[left];
            current = h*diff;
            if(current > max){
                max = current;
            }
            left++;
        } else {
            h = height[left];
            current = h*diff;
            if(current > max){
                max = current;
            }
            if (height[left] > height[left+1]){
                right--;
            } else {
                left++;
            }
        }
    }
    
    return max; 
    
    
};

Runtime: 123 ms, faster than 59.05% of JavaScript online submissions for Container With Most Water.
Memory Usage: 49.8 MB, less than 37.58% of JavaScript online submissions for Container With Most Water.

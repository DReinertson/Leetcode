/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let leftMax = -1; 
    let rightMax = -1;
    let water = 0; 
    let left = 0; 
    let right = height.length -1;
    
    while (left <= right){
        if (height[left] > leftMax){
            leftMax = height[left];
        } 
        
        if (height[right] > rightMax){
            rightMax = height[right];
        }
        
        console.log('leftMax: ', leftMax);
        console.log("rightMax: ", rightMax);
        console.log('water: ', water);
        
        
        if (leftMax > rightMax){
            water += rightMax - height[right];
            right--
        } else{
            water += leftMax - height[left];
            left++;
        }
    }
    
    return water;
    
};

Runtime: 66 ms, faster than 97.72% of JavaScript online submissions for Trapping Rain Water.
Memory Usage: 42.6 MB, less than 92.83% of JavaScript online submissions for Trapping Rain Water.

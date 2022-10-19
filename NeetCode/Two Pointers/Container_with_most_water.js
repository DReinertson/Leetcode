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
    
    for (let x = 0; x < height.length-1; x++){
        for (let y = x+1; y < height.length; y++){
            if (height[x] > height[y]){
                h = height[y];
            } else {
                h = height[x];
            }
            
            let diff = y-x;
            
            current = diff*h
            
            if (current > max){
                max = current;
            }
        }
    }
    
    return max; 
    
    
};

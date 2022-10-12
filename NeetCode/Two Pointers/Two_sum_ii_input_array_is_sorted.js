/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let x = 0;
    let y = numbers.length-1;
    let arr = [];
    while (x < y){
        let sum = numbers[x] + numbers[y];
        
        if (sum > target){
            y--;
        }
        
        else if (sum < target){
            x++;
        }
        
        else {
            arr.push(x+1);
            arr.push(y+1);
            return arr;
        }
    }
    
};

Runtime: 100 ms, faster than 53.91% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43.3 MB, less than 19.44% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.

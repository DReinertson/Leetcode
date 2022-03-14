/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counterIndex = 1;
    let count = 0;
    
    for (let x = 1; x < nums.length-1; x++){
        console.log("x: ", x);
        console.log('nums[x]: ', nums[x]);
        console.log('nums[x+1]: ', nums[x+1]);
        console.log('counterIndex: ', counterIndex);
        console.log('nums[counterIndex]: ', nums[counterIndex]);
        console.log('count: ', count);
        if (x === 1){
            if (nums[x] !== nums[x-1]){
                count++;
                counterIndex++;
            }
            else if (nums[x] !== [x+1]){
                nums[counterIndex] = nums[x+1];
                count++;
                counterIndex++;
            }
        }
        else if (nums[x] !== nums[x+1]){
            count++
            nums[counterIndex] = nums[x+1];
        }
        
        nums = nums.slice(0, count+1);
        
        console.log("nums: ", nums);
        // console.log("slice: ", nums.slice(0, count+1));
        
        
    }
    
    
};


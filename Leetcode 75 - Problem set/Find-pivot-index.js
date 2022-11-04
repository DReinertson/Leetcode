/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = 0; 
    let leftsum = 0;

    for (let x = 0; x < nums.length; x++){
        sum += nums[x];
    }

    for (let y = 0; y < nums.length; y++){
        console.log("y: ", y);
        console.log('nums[y]: ', nums[y]);
        console.log('sum: ', sum);
        console.log('leftsum: ', leftsum);
        if (leftsum === (sum - leftsum - nums[y])){
            return y;
        } else {
            leftsum += nums[y];
        }

        console.log('---------------------');
    }


    return -1;
};

131ms runtime (top 51%)
44mb memory (top 6%)

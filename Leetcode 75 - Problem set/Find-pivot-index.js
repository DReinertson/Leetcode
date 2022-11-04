/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = nums[0];
    let sumRight = nums[nums.length-1];
    let left = 1; 
    let right = nums.length - 2;

    while (sumLeft !== sumRight){
        console.log('left | right: ', left, ' ', right);
        console.log(nums[left], ' ', nums[right]);
        console.log('sums: ', sumLeft, ' ', sumRight);

        if (sumLeft === sumRight){
            return left;
        } else if (sumLeft < sumRight){
            sumLeft += nums[left];
            left++;
        } else{
            sumRight += nums[right];
            right--;
        }

        console.log('-----------------------------');
    }

    return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = 0;
    let sumRight = 0;
    let left = 0; 
    let right = nums.length - 1;
    let counter = 0; 

    while (left <= right){
        console.log('left | right: ', left, ' ', right);
        console.log('nums: ', nums[left], ' ', nums[right]);
        console.log('sums: ', sumLeft, ' ', sumRight);

        if (counter === 0){
            if (nums[left] > nums[right]){
                sumRight += nums[right];
                right--;
            } else {
                sumLeft += nums[left];
                left++;
            }
            counter++;
        } else{
            if (sumLeft === sumRight){
            return left;
        } else if (sumLeft < sumRight){
            sumLeft += nums[left];
            left++;
        } else{
            sumRight += nums[right];
            right--;
        }
        }
        

        console.log('-----------------------------');
    }

    return -1;
};

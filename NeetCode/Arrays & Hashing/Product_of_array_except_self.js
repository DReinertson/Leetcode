/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Iterate over the array from left to right, recording the product of the numbers we've seen so far.
//Iterate backwards from right to left, multiplying each element in res by the product of the numbers we've seen so far from right-to-left.


var productExceptSelf = function(nums) {
    
    let finalArr = [];
    let product = 1;
    
    //Iterate from left to right    
    for (let x in nums){
        finalArr.push(product);
        product *= nums[x];
    }
    
    //reinitialize product to 1, then iterate from right to left.
    product = 1;
    
    for (let y = nums.length-1; y>=0; y--){
        finalArr[y] *= product;
        product *= nums[y];
    }
    
    return finalArr;

};

Runtime: 122 ms, faster than 86.48% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 56.1 MB, less than 18.97% of JavaScript online submissions for Product of Array Except Self.

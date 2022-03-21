/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


//Reverse the array 
function reverse(arr, start, end){
    while (start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}


var rotate = function(nums, k) {
    
   let n = nums.length;
    
    k %= n
    
    //Reverse the array, then the first portion of the array (up to k), then the 2nd portion of the array
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
};

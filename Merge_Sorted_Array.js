/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    for (let x = m; x < nums1.length; x++){
        nums1[x] = nums2[x-m];
    }
    
    console.log(nums1);
    
    nums1.sort(function(a,b){
        return a-b;
    })
    
};

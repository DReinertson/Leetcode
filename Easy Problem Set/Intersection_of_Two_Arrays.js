/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//First idea : Unsorted Arrays - Loop through one if arr[x] is in arr2, pass to arr3. Θ(n^2). 
//Could create map. Loop through 1st array and create number:count key:value pair. Loop through 2nd array, if arr2[x] already exists in map, then add to arr3 (returned array). 
var intersect = function(nums1, nums2) {
    let map1 = new Map();
    let finalArr = [];
    
    for (let x = 0; x < nums1.length; x++){
        if (map1.has(nums1[x])){
            map1.set(nums1[x], map1.get(nums1[x])+1);
            // console.log("adding to map: ", map1);
        } else{
                map1.set(nums1[x], 1);
            // console.log('setting map: ', map1);
            }
    }
    
    for (let y = 0; y < nums2.length; y++){
        if (map1.has(nums2[y]) && map1.get(nums2[y]) > 0){
            finalArr.push(nums2[y]);
            map1.set(nums2[y], map1.get(nums2[y])-1);
            // console.log('subtracting from map: ', map1);
        }
    }
    
    // console.log('map1: ', map1);
    // console.log('finalArr: ', finalArr);
    
    return finalArr;
};

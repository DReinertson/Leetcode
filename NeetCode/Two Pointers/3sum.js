/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Could use 3 nested for loops, but that would be a O(n^3) time complexity. Not good.

//Could use while loop with 3 pointers, move last pointer until it hits the end, then move the 2nd pointer until it hits the end, then the first pointer until the end. When first pointer hits nums.length-2, end while loop? 
var threeSum = function(nums) {
    
    let finalArr = new Set();
    let first = 0; 
    let second = 1;
    let third = 2;
    let length = nums.length;
    
    while (first < second){
        console.log('first: ', first, ' second: ', second, ' third: ', third);
        console.log('nums[first]: ', nums[first], ' nums[second]: ', nums[second], ' nums[third]: ', nums[third])
        let arr = [nums[first], nums[second], nums[third]];
        if (arr[0] + arr[1] + arr[2] === 0 && !finalArr.has(arr)){
            console.log('equals 0 & not in set. Adding to set');
            finalArr.add(arr);
        }
        if(third < length-1){
            console.log('adding 1 to third');
            third += 1;
            console.log('third added 1');
        }
        
        else if (second < length - 2){
            console.log('adding 1 to second');
            second += 1;
            console.log('second added 1');
        }
        
        else{
            console.log('adding 1 to first');
            first += 1;
            console.log('first added 1');
        }
    }
    
    return Array.from(finalArr);
};

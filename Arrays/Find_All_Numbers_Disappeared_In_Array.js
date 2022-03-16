/**
 * @param {number[]} nums
 * @return {number[]}
 */

//On to something here, closest to an Θ(n) solution so far.
//Can use a for loop with indexOf in it, but that would be Θ(n^2)...

var findDisappearedNumbers = function(nums) {
    
    let counter = 1;
    let position = 0;
    let x = 0;
    
    nums.sort(function(a,b){
        return a-b;
    })
    
    console.log('nums: ', nums);
    
    while (counter < nums.length){
        console.log('counter: ', counter);
        console.log('position: ', position);
        console.log('x: ', x);
        console.log('nums[x]: ', nums[x]);
        if (x === 0) {
            if (nums[x] === 1){
                counter++;
                x++;
            } else{
                x++;
            }
        } else{
            if (nums[x] !== counter){
                nums[position] = counter;
                position++;
                counter++;
            } else{
                x++;
            }
        }
        console.log('nums after: ', nums);
    }
    
    
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */

// Can loop through every value and at every value check all the values to the right. Θn^2 though
// Can initially loop through the array and get the max value and the index of the max value and change all the values between the start and the index of max. Would require a for loop inside while loop, still Θn^2
//Start from the end. ez pz.

var replaceElements = function(arr) {
    
    //Keep track of two values. The max number and it's position
    
    
    let start = arr.length-1;
    let current;
    let max = arr[start];
    
    for (let x = start; x >= 0; x--){
        current = arr[x];
        
        // console.log('x: ', x);
        // console.log('arr[x]', arr[x]);
        // console.log('max: ', max);
        // console.log('current: ', current);
        if (arr[x] > max){
            // console.log('changing max: ', max, arr[x], current);
            arr[x] = max;
            max = current;
        }  else{
            arr[x] = max;
        }
        
        // console.log("arr: ", arr);
        
    }
    
    arr[start] = -1;
    
    return arr;
    
};

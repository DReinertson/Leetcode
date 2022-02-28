/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

//Returning a separate array. Not following instructions...

var duplicateZeros = function(arr) {
    
    let newArr = [];
    
    for (x in arr){
        console.log('arr[x]: ', arr[x]);
        newArr.push(arr[x]);
        if(arr[x] === 0){
            console.log('is zero');
            newArr.push(0);
        }
        
        console.log('newArr: ', newArr);
    }
    
    return newArr;
    
};

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


//Actual answer that passed all tests
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    for (let x = 0; x < arr.length; x++){
        if (arr[x] === 0){
            for (let y = arr.length-1; y>x; y--){
                // console.log('y: ', y);
                // console.log('arr[y]: ', arr[y], arr[y-1]);
                arr[y] = arr[y-1];
                // console.log('arr after replace: ', arr);
            }
            
            // console.log('arr after x === 0 : ', arr);
            x++
        }
        
        // console.log('arr after first for loop: ', arr);
    }
    
    
};


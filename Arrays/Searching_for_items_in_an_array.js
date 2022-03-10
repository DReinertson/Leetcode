/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    let check = false;
    
    for (let x = 0; x < arr.length; x++){
        if (arr.indexOf(arr[x] * 2) !== -1 && arr.indexOf(arr[x]*2) !== x){
            console.log('arr[x]: ', arr[x]);
            console.log('arr[x] * 2: ', arr[x]*2);
            check = true;
            return check;
        }
    }
    
    return check;
    
};

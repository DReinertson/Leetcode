/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let increasing = true;
    let peak = false;
    let decreasing = false;
    
    //valid array length    
    if (arr.length < 3){
        return false;
    }
    
    for (let x = 0; x < arr.length; x++){
        //If sequential numbers are equal, not a valid mountain
        if (arr[x] === arr[x+1]){
            return false;
        }
        
        //If you're on the rising part of the mountain, arr[x+1] should be more than arr[x]
        if (increasing && arr[x] > arr[x+1]){
            return false;
        }
        
        //Set variables checking if it's rising or falling
        else if (increasing && arr[x] < arr[x+1]){
            if (arr[x+1] > arr[x+2]){
                increasing = false;
                peak = true;
                decreasing = true;
            } 
        }
        
        else if(decreasing && arr[x] <= arr[x+1]){
            return false;
        }
    }
    
    if (!peak || !decreasing){
        return false;
    }
    
    return true;
    
};

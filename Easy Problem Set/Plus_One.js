/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Idea 1: join the array to a single number, add to it and separate it into each individiual number, add +1 to it, then create an array looping through the new number. 

//Idea 2 : It's already an array, add +1 to the last index. If the value at that index is 9, then add +1 to previous index. You would probably have to use a while loop to make sure the previous number isn't also 9, for example : 19999. Would be a while loop in a for loop Θ(n^2)

//Idea 3 : Loop through array backwards. This one doesn't work with the test case of [9], because there isn't a previous index. 
var plusOne = function(digits) {
    let plusOne;
    
    for (let x = digits.length-1; x > 0; x--){
        // console.log("x: ", x, 'digits[x]: ', digits[x]);
        if(plusOne){
            // console.log('is plusone');
            if (digits[x] === 9){
                digits[x] = 0;
            } else{
                digits[x] += 1;
                break; 
            }
        }else{
            // console.log('not plusone');
            if (digits[x] === 9){
                // console.log('equoal to 9');
                digits[x] = 0;
                plusOne = true;
            } else{
                // console.log('not 9');
                digits[x] +=1;    
                break;
            }
        
            
        }
    }
    
    // console.log('digits: ', digits); 
    return digits;
    
};

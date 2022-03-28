/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Idea 1: join the array to a single number, add to it and separate it into each individiual number, add +1 to it, then create an array looping through the new number. 

//Idea 2 : It's already an array, add +1 to the last index. If the value at that index is 9, then add +1 to previous index. You would probably have to use a while loop to make sure the previous number isn't also 9, for example : 19999. Would be a while loop in a for loop Θ(n^2)
var plusOne = function(digits) {
    
    console.log('digits: ', digits);
    
    //Idea 1 - Step 1 : Join Array into single number. 
    
    let joint = BigInt(digits.join(""));
    
    
    // console.log('joint before adding: ', joint);
    
    //Idea 1 - Step 2 : Add to new number
    joint++;
    // console.log('joint: ', joint);
    
    joint = joint.toString();
    
    
    
    //Idea 1 - Step 3 : Create new array.
    let finalArr = [];
    // console.log('length: ', joint.length);
    for(let x = 0; x < joint.length; x++){
        console.log('x: ', x, 'joint[x]: ', joint[x]);
        finalArr.push(Number(joint[x]));
    }
    
    // console.log('finalArr: ', finalArr);
    
    return finalArr;
    
    
    
    
    
   
    
};

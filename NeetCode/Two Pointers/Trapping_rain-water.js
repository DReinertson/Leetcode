/**
 * @param {number[]} height
 * @return {number}
 */

//How can you tell where water can be trapped? if the current index is x, water can be trapped if x-1 and x+1 are higher than x (if height[x-1] > height[x] < height[x+1]). Looking at the problem, this statement is false in a way. When you hit a peak, you continue from that point until you hit an equal or greater peak. 

//For instance x = 1 is a peak and you count the squares until you hit an equal or greater peak, x = 3. But how do you count the squares? Let's look at the next section. 

//Peak at x = 3. Continue on until you hit another peak, which is x=7. You can use the height of x=3 times the distance covered to get total area and then subtract the heights from the indices between. 

var trap = function(height) {
    
    let rain = 0;
    
    for (let x = 0; x < height.length; x++){
        let diff;
        let h;
        let sum = 0;
        let right = x+1;
        let collection; 
        let peak; 
        console.log('x: ', x);
        console.log('height[x]: ', height[x]);
        console.log('going into loop: ', height[x], height[x-1]);
        console.log('----------------------------');
        console.log('truth check: ', (x === 0 && height[x] > height[x+1]));
        if ((height[x] > height[x-1]) || (x === 0 && height[x] > height[x+1])){
            console.log('right: ', right);
            console.log('height[right]: ', height[right]);
            console.log('going into while loop: ', height[x], height[right]);
            console.log('----------------------');
            while(height[x] > height[right]){
                peak = true; 
                console.log('sum before: ', sum);
                sum += height[right];
                console.log('sum after: ', sum);
                console.log('----------------');
                console.log('Want to trigger peak false: ');
                console.log('right + 1: ', right +1);
                console.log('height length: ', height.length -1);
                console.log('height[right+1]: ', height[right+1], height[x]);
                if (right+1 === height.length-1 && height[right+1] < height[x]){
                    peak = false;
                    break;
                }
                console.log('right before adding: ', right);
                right++;
                console.log('right after adding: ', right);
                console.log('-----------------------');
                
            }//End while loop
            if (peak){
                if (height[right] < height[x]){
                    h = height[right];
                } else {
                    h = height[x];
                }
                diff = right - x - 1;
                console.log('diff variables: ', right, x);
                console.log('diff: ', diff);
                console.log('-------------------------');
                console.log('rain before: ', rain);
                rain += diff * h - sum;
                console.log('rain after: ', rain);
            }
            
        } //End if height[x] > height[x-1]
    } //End for loop
    
    return rain;
    
};

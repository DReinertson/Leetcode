/**
 * @param {number[]} prices
 * @return {number}
 */

//First idea would be almost recursion, looping through each possible outcome. This could be Θ(n^n), which is not very effecient

//2nd idea : You need to keep track of highs and lows and maximize those some how? 

//Mamimum sell points will be equal to the sum of its parts? Just need to keep track when the current value is larger than the previous value and sum that? 
var maxProfit = function(prices) {
    
    let maximum = 0;
    
    for (let x = 1; x < prices.length; x++){
        if (prices[x] > prices[x-1]){
            maximum += prices[x] - prices[x-1];
        }
    }
    
    return maximum;
    
    
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let low;
    let diff = 0;
    
    for (let x = 0; x < prices.length; x++){
        
        if (x === 0){
            low = prices[x];
        }
        
        else if (prices[x] - low > 0 && prices[x] - low > diff){
            diff = prices[x] - low;
        }
        
        else if (prices[x] < low){
            low = prices[x];
        }
        
        
    }
    
    return diff;
    
    
    
    
    
};

Runtime: 117 ms, faster than 74.08% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.7 MB, less than 66.52% of JavaScript online submissions for Best Time to Buy and Sell Stock.

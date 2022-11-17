/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let low;
    let diff = 0; 

    for (let x = 0; x < prices.length; x++){
        if (prices[x] < low || x === 0){
            low = prices[x];
        } else if (prices[x] - low > diff){
            diff = prices[x] - low
        }
    }

    return diff;
    
    
    
    
    
};

Runtime 157 ms Beats 25.68%
Memory 51.4 MB Beats 91.1%

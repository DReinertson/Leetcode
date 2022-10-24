
var MinStack = function() {
    this.arr = [];
    this.low = [];
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
    
    let lastMin = this.low[this.low.length-1];
    if (lastMin === undefined || val < lastMin){
        this.low.push(val);
    } else{
        this.low.push(lastMin)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
    this.low.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.low[this.low.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

Runtime: 163 ms, faster than 72.18% of JavaScript online submissions for Min Stack.
Memory Usage: 50.4 MB, less than 14.01% of JavaScript online submissions for Min Stack.

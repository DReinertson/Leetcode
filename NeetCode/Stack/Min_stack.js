
var MinStack = function() {
    this.minStack = [];
    this.mainStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.mainStack.push(val);
    if(val > this.minStack[this.minStack.length - 1] && this.minStack.length !== 0){
        this.minStack.push(this.minStack[this.minStack.length-1]);
    } else{
        this.minStack.push(val);
    }

    console.log('minStack: ', this.minStack);
    console.log('mainStack: ', this.mainStack);
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.mainStack.pop();
    this.minStack.pop();
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

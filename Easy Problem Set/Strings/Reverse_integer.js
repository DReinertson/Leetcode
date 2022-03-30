/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative;
    if (x < 0){
        negative = true;
        x = Math.abs(x);
    }
    let arr = x.toString().split('');
    arr.reverse();
    
    if (Number(arr.join('')) > Math.pow(2, 31) - 1){
        return 0;
    }
    
    if(negative){
        return -Math.abs((Number(arr.join(''))));
    } else{
        return Number(arr.join(''));            
        }
    console.log(arr);
};

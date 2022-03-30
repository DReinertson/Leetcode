/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let arr = s.split('');
    console.log('arr: ', arr);
    
    let counter = new Map();
    
    for (let x = 0; x < arr.length; x++){
        if (counter.has(arr[x])){
            counter.set(arr[x], counter.get(arr[x]) - 1);
        } else{
            counter.set(arr[x], 1);
        }
    }
    
    counter.forEach(function(value, key){
        if (value <= 0){
            counter.delete(key);
        }
    })
    

    console.log('map: ', counter);
    if(counter.size === 0 ){
        return -1
    } else{
        return arr.indexOf(counter.keys().next().value);
    }
    
    
    
}

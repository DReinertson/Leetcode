/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length){
        return false;
    }
    
    let counter = new Map();
    
    for (let x = 0; x < s.length; x++){
        if(counter.has(s[x])){
            counter.set(s[x], counter.get(s[x]) + 1);
        } else{
            counter.set(s[x], 1);
        }
    }
    
    for (let y = 0; y < t.length; y++){
        if(counter.has(t[y])){
            counter.set(t[y], counter.get(t[y]) -1);
            if(counter.get(t[y]) === 0){
                counter.delete(t[y]);
            }
        } else{
            counter.set(t[y], 1);
        }
    }
    
    if (counter.size === 0){
        return true;
    } 
    
    return false;
};

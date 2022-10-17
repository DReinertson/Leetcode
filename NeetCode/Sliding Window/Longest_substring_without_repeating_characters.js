/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let map1 = new Map();
    let count = 0;
    let max = 1;
    
    if (s === ''){
        return 0;
    }
    
    for (let x = 0; x < s.length; x++){
        console.log('s[x]: ', s[x], ' s[x-1]: ', s[x-1], ' s[x+1]: ', s[x+1]);
        console.log(map1.has(s[x]));
        if (s[x-1] === s[x+1]){
            console.log('in equal if');
            if (!map1.has(s[x])){
                count+=1;                
            }
            if (count > max){
                max = count;
            }            
            map1 = new Map();            
            count = 1;
            map1.set(s[x], 1);
        }
        else if (!map1.has(s[x])){
            console.log('adding count');
            map1.set(s[x], 1);
            count += 1;
        }
        else {
            console.log('in else loop')
            map1 = new Map();
            if (count > max){
                max = count;
            }
            count = 1;
            map1.set(s[x], 1);
        }
        console.log('after loop: ', map1, count, max);
    }
    
    if (count > max){
        max = count;
    }
    
    return max;
};

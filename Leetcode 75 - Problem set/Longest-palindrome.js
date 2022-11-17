/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map1 = new Map();
    let length = 0;
    let odd = 0;


    for (let x = 0; x < s.length; x++){
        if (map1.has(s[x])){
            map1.set(s[x], map1.get(s[x]) + 1);
        } else{
            map1.set(s[x], 1);
        }
    }

    for (let [key, value] of map1){
        console.log(key, value);
        if (value % 2 === 0){
            length += value;
        } else{
            if (value > odd){
                odd = value;
            }
        }
    }
    length += odd;

    return length;
};

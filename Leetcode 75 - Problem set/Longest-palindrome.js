/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map1 = new Map();
    let length = 0;
    let check = false;


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
            if (!check){
                length += value; 
                check = true;
            } else{
                length += value - 1;
            }
        }
    }

    return length;
};

Runtime 121 ms Beats 27.20%
Memory 45.6 MB Beats 5.25%

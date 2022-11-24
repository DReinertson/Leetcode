/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let temp = [];
    let map1 = new Map([
        ['+' , 0],
        ['*' , 0],
        ['/' , 0],
        ['-' , 0],
    ])

    for (let x = 0; x < tokens.length; x++){
        if (map1.has(tokens[x])){
            let value1 = parseInt(temp.pop());
            let value2 = parseInt(temp.pop())
            if (tokens[x] === '+'){
                temp.push(value2 + value1);
            } else if (tokens[x] === '-'){
                temp.push(value2 - value1);
            } else if (tokens[x] === '*'){
                temp.push(value2 * value1);
            } else {
                if (value2 / value1 < 0){
                    temp.push(Math.ceil(value2 / value1));
                } else{
                    temp.push(Math.floor(value2 / value1));
                }
                
            }
        } else{
            temp.push(tokens[x]);
        }

    }
    
    return temp[0];
};

Runtime 131 ms Beats 29.25%
Memory 45 MB Beats 57.95%
  
  https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/849290893/

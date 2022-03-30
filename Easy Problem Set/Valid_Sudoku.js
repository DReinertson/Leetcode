/**
 * @param {character[][]} board
 * @return {boolean}
 */

//Need to check for 3 things : 
// 1. Need to check the array itself index x 0 - arr.length
// 2. Need to check index x, y, z of 3 adjacent rows. 3x3
// 3. Need to check the same index in every array. Would need to 

//Best way to loop through array of arrays? nested for loops? Recursion?

//Need to use a map to avoid Θ(n^3) and see if values exist in constant time. Do I need 3 maps? one for horizontal, one for vertical, and one for 3x3? 
var isValidSudoku = function(board) {
    
    let boardCheck = new Set();
    
    for (let x = 0; x < 9; x++){
        for (let y = 0; y < 9; y++){
            let value = board[x][y];
            
            if (value !== "."){
                let row = `${value} row ${x}`;
                let column = `${value} column ${y}`;
                let square = `${value} box ${Math.floor(x/3)}, ${Math.floor(y/3)}`;
                
                
                
                if (boardCheck.has(row) || boardCheck.has(column) || boardCheck.has(square)){
                    return false;
                } else{
                    boardCheck.add(row);
                    boardCheck.add(column);
                    boardCheck.add(square);
                }                
            }
        }
    }
    
    console.log('set: ', boardCheck);
    
    return true;
    
};

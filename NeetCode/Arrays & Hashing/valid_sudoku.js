/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    
    for (let x = 0; x < 9; x++){
        let row = new Set(),
        col = new Set(),
        square = new Set();
        
        for (let y = 0; y < 9; y++){
            let addrow = board[x][y];
            let addcol = board[y][x];
            let addsquare = board[3*Math.floor(x/3)+Math.floor(y/3)][3*(x%3)+(y%3)];
            
            if(addrow !== '.'){
                if (row.has(addrow)){
                    return false;
                }
                row.add(addrow);
            }
            
            if(addcol !== '.'){
                if (col.has(addcol)){
                    return false;
                }
                col.add(addcol);
            }
            
            if(addsquare !== '.'){
                if (square.has(addsquare)){
                    return false;
                }
                square.add(addsquare);
            }
        }
    }
    
    return true;
    
    
};

Runtime: 107 ms, faster than 76.66% of JavaScript online submissions for Valid Sudoku.
Memory Usage: 44 MB, less than 98.49% of JavaScript online submissions for Valid Sudoku.

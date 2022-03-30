/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < x; y++) {
            // console.log('matrix: ', matrix);
            // console.log('x: ', x, 'y: ', y);
            // console.log('matrix[x][y]: ', matrix[x][y]);
            // console.log('matrix[y][x]: ', matrix[y][x]);
          let temp = matrix[x][y];
          matrix[x][y] = matrix[y][x];
          matrix[y][x] = temp;
        }
      }
    
    for (var i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
    
    // console.log('matrix: ', matrix);
    
};

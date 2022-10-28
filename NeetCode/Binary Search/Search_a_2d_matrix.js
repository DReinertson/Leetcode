/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//Could I compare target to the last number of each row until it's no longer higher? Would require a for loop then binary search which would be n log n 

//Could I join all the arrays into a single row and do the binary search then? 

var searchMatrix = function(matrix, target) {
    
    let group;
    let start = 0;
    let end = matrix[0].length-1;
    let mid;
    
    for (let x = 0; x < matrix.length; x++){
        let last = matrix[x][matrix[x].length-1];
        console.log('last target: ', last, ' ', target);
        if (last === target){
            // console.log('returning true:');
            return true;
        }
        if (last > target){
            group = x;    
            break;
        }
    }
    
    if (group === undefined){
        return false;
    }
    
    while (start <= end){
        mid = Math.floor((start + end) / 2);
        // console.log('group: ', group);
        // console.log('arr: ', matrix[group]);
        // console.log('start and end: ', start, ' ', end);
        // console.log('mid: ', mid, ' ', matrix[group][mid]);
        // console.log('-----------------------------');
        
        if (matrix[group][mid] === target){
            return true;
        } else if(matrix[group][mid] > target){
            end = mid - 1;
        } else if(matrix[group][mid] < target){
            start = mid + 1;
        }
    }
    
    return false;
    
};

Runtime: 124 ms, faster than 5.45% of JavaScript online submissions for Search a 2D Matrix.
Memory Usage: 44.2 MB, less than 5.29% of JavaScript online submissions for Search a 2D Matrix.

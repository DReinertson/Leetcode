/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

 //The trick here is to figure out how to move the goal posts. 
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let start = 1; 
        let end = n;

        while (start < end){
           let mid = Math.floor(start + (end - start) / 2);

            if (isBadVersion(mid)) end = mid;
            else start = mid + 1;
        }

        return start;

        
    };
};

Runtime 61 ms Beats 94.99%
Memory 41.8 MB Beats 65.1%

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
    let negative;
    let num;
    let arr = [];
    let val;
    

    
   
    
    
    for (let x = 0; x < s.length; x++){        
        if(!s.charAt(x).match(/[0-9]/i) && num){
            break;
        }        
        if(s.charAt(x).match(/[a-z.]/i) && !num){
            return 0;
        }        
        if (s[x] === '-' || s[x] === '+'){            
            if(s[x] === '-' && s.charAt(x+1).match(/[0-9]/i)){
                negative = true;
            }
            else if (!s.charAt(x+1).match(/[0-9]/i)){
                return 0;
            }            
        }
        
        if(s.charAt(x).match(/[0-9]/i)){
            arr.push(s[x]);
            num = true;            
        }
    }    
    val = parseInt(arr.join(''));    
    if(arr.length === 0){
        return 0;
    }    
    if (val >= 2147483648){
        if (negative === true){
            return -2147483648;
        } else{
            return 2147483647;
        }
    }    
    if (negative === true){
        // console.log('negative value: ', -Math.abs(parseInt(arr.join(''))));
            return -Math.abs(parseInt(arr.join('')));
        }
    
    return val;
    
    
};

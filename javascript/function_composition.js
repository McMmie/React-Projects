/**
 * a function that takes an array of functions and
 * returns a function composition of the array of functions
 *
 * @param {Function[]}functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        for (let i = 1; i <= functions.length; i++) {
            x = functions[functions.length-i](x);
        }
        return x;
        
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/**
 * Checks if an integer is a power of 2
 *
 * @param {number} int
 * @returns {boolean}
 */

function powerOfTwo(int) {
    if (int & (int - 1)) { return false; } else {return true;}
}

// console.log(powerOfTwo(4));
// Output = true

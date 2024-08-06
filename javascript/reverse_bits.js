/**
 * 
 * @param {number} int 
 * @returns {string}
 */

function reverseBits (int) {
    let myList = (int >>> 0).toString(2).split('').reverse();
    let concStr = "";

    for (i = 0; i < myList.length; i++) {
        concStr = concStr + myList[i];
    }
    return concStr;
}

// console.log(reverseBits(2));
// Output = 01

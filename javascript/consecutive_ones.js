/**
 * 
 * @param {number} int 
 * @returns {number}
 */
function consecutiveOnes (int) {
    let myList = (int >>> 0).toString(2).split('0');
    let counter = 0;

    for (let i = 0; i < myList.length; i++) {
        if ( myList[i].length > counter) {
            counter = myList[i].length;
        }
    }
    return counter;
}

// console.log(consecutiveOnes(14));
// Output = 3

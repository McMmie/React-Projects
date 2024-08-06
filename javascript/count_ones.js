/*
 * takes a positive integer and returns the number
 * of 1s in its binary representation.
 * 
 * params {Number} int.
 * return {Number} the number of ones.
 */

function countOnes(int) {
	let toBinary = (int >>> 0).toString(2);
	let myList = toBinary.split('');

	const count = myList.filter((n) => {
		return n > 0;
	}).length;
	return count;

	/*
	* Alternatively, you can use a one liner.
	* return (int >>> 0).toString(2).split('').filter((n) => { return n > 0; }).length;
	*/
}

// console.log(countOnes(-1);

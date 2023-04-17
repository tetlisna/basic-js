const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let str = n.toString(); //101
  if (str.length < 3) {
    return Math.max(...str.split(''))
  }
	let max = 0;

	for (let i = 0; i < str.length - 1; i++) {
		let numArr = str.split('');
		numArr.splice(i, 1);

		if (Number(numArr.join('')) > max) {
			max = Number(numArr.join(''));
		}
		
	}
  return max;
	
}

module.exports = {
	deleteDigit,
};


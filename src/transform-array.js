const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
	const trArr = [...arr];

	for (let i = 0; i < trArr.length; i++) {
    
		// if (!isNaN(trArr[i])) {
		// 	return trArr;
		// }

    // console.log();

		// if (trArr[i] === '--discard-next') {
		// 	trArr.splice(trArr[i - 1], 2);
		// } else if (trArr[i] === '--discard-prev') {
		// 	trArr.splice(trArr[i - 2], 2);
		// } else if (trArr[i] === '--double-prev') {
		// 	trArr[i - 1];
		// 	trArr[i] = trArr[i - 1];
		// } else if (trArr[i] === '--double-next') {
		// 	trArr[i + 1];
		// 	trArr[i] = trArr[i + 1];
		// }
    
	}
console.log(trArr, "trArr");
	return trArr;
}
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]), 'discard-prev');
// console.log(transform([1, 2, 3, '--discard-next', 4, 5]), 'discard-next');
// console.log(transform([1, 2, 3, '--double-next', 4, 5]), 'double-next'); //123445
// console.log(transform([1, 2, 3, '--double-prev', 4, 5]), 'double-prev'); //123345

module.exports = {
  transform
}

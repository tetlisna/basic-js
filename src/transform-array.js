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
	console.log('******************************', arr);
	if (!Array.isArray(arr)) {
		throw new Error(`'arr' parameter must be an instance of the Array!`);
	}
	const trArr = [];

	let discard_next = false;
	let discarded = false;
	let double_next = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			discard_next = true;
		} else if (arr[i] === '--discard-prev') {
			if (trArr.length) {
				if (!discarded) {
					trArr.pop();
				} else {
					discarded = false;
				}
			}
		} else if (arr[i] === '--double-prev') {
			if (trArr.length) {
				if (!discarded) {
					trArr.push(trArr[trArr.length - 1]);
				} else {
					discarded = false;
				}
			}
		} else if (arr[i] === '--double-next') {
			double_next = true;
		} else {
			if (!discard_next) {
				trArr.push(arr[i]);

				if (double_next) trArr.push(arr[i]);
			} else {
				discarded = true;
			}

			discard_next = false;
			double_next = false;
		}
	}
	return trArr;
}


module.exports = {
	transform,
};

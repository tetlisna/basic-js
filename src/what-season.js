const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	// let month = Math.floor(((date.getMonth() / 12) * 4) % 4);
	let since1970 =-Date.parse(date);
  console.log(since1970, "1970");
	if (date !== null || typeof date !=='undefined' || !isNaN(date) || date instanceof Date) {
		//   return  'Invalid date!';
		// }

		let month = +date.getMonth() + 1;

		switch (month) {
			case 12:
			case 1:
			case 2:
				season = 'winter';
				break;
			case 3:
			case 4:
			case 5:
				season = 'spring';
				break;
			case 6:
			case 7:
			case 8:
				season = 'summer';
				break;
			case 9:
			case 10:
			case 11:
				season = 'fall';
				break;
			default:
				throw new Error('Invalid date!');
		}
	}
	return season;
}

// module.exports = {
// 	getSeason,
// };
console.log();
getSeason(new Date(866, 2, 10, 12, 53, 10, 825));
// () => getSeason({ John: 'Smith' }),
// () => getSeason(20192701),
// () => getSeason([2019, '27', 0 + '1']),
// () => getSeason(() => new Date())
// ], 'Invalid date!');

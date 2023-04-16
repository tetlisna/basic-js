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

	if (typeof date === 'undefined') {
		return 'Unable to determine the time of year!';
	}

	let month;

	if (typeof date === 'number' && date > 0 && date <= 12) {
	} else if (date instanceof Date === false || Object.getOwnPropertyNames(date).length) {
		throw new Error('Invalid date!');
	}
	if (typeof date === 'number') {
		month = date;
	} else if (!isNaN(date)) {
		month = +date.getMonth() + 1;
	} else {
  }

	let season;

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
	}

	// console.log('=================', season, 'season');
	return season;
}

module.exports = {
	getSeason,
};
//getSeason(new Date(866, 2, 10, 12, 53, 10, 825));
// () => getSeason({ John: 'Smith' }),
// () => getSeason(20192701),
// () => getSeason([2019, '27', 0 + '1']),
// () => getSeason(() => new Date())
// ], 'Invalid date!');

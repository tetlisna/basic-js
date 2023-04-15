const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: [],
	getLength() {
		this.chain.length;
	},
	addLink(value) {
		if (value === undefined) {
			this.chain.push('');
		} else if (value !== null) {
			this.chain.push(`( ${value.toString()} )`);
		} else if (value === null) {
			this.chain.push(`( null )`);
		}
    return this;
	},
	removeLink(position) {
		if (isNaN(position) || position > this.chain.length || position <= 0) {
			this.chain = [];
			throw new Error("You can't remove incorrect link!");
		} else {
			this.chain.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let result = this.chain.join('~~');
		this.chain = [];
		return result;
	},
};

module.exports = {
	chainMaker,
};

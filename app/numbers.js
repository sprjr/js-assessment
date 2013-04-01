if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		valueAtBit: function(num, bit) {

		},

		base10: function(str) {
			return parseInt(str, 2);
		},

		convertToBinary: function(num) {
			// this is the answer, but I do not understand it
			// as such, I do not intend to activate it to pass the test
			// and want to sit down and work through it

			// var arr = [];

// 			for (var i = 7; i > -1; i--) {
// 				arr.push( num & (1 << i) ? 1 : 0 );
// 			}

// 			return arr.join('');
		},

		multiply: function(a, b) {
			return a * b;
		}
	};
});
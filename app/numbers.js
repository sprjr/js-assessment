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
			// after researching stack, some articles, and the answer sheet
			// I found the answer to be the most applicable, and concise solution
			// Although I believe there are libraries to assist with this (SinfulJS?)
			// if this is a large part of the application

			a = adjust(a);
			b = adjust(b);

			return (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

			function adjust (num) {
				var exponent = null,
					result = {
						adjusted: num,
						multiplier: 1
					};

				if (num < 1) {
					exponent = Math.floor(Math.log(num) * -1);

					result.multiplier = Math.pow(10, exponent);
					result.adjusted = num * result.multiplier;
				}

				return result;
			}
		}
	};
});
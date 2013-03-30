if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		alterContext : function(fn, obj) {
			return fn.call(obj);
		},

		alterObjects : function(constructor, greeting) {
			constructor.prototype.greeting = greeting;
			return constructor;
		},

		iterate : function(obj) {
			// http://jsperf.com/own-prop-loop
			// git checkout 5af22e5aba67203d76e3737ba2653fb1a94e6f23
			// if you would like to see another way of solving this,
			// which is a bit faster apparently. Just tinkering.
			var ownProperties = Object.getOwnPropertyNames(obj);

			var i=0, j=ownProperties.length, results = [];

			for(i;i<j;i++) {
				results.push(ownProperties[i] + ': ' + obj[ownProperties[i]]);
			}

			return results;
		}
	};
});
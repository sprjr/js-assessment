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
			// Object.getOwnPropertyNames(obj);

			var ownProperties = [];

			for(var key in obj) {
				if (obj.hasOwnProperty(key)) {
					ownProperties.push(key + ': ' + obj[key]);
				}
			}

			return ownProperties;
		}
	};
});

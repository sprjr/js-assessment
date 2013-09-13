if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/[0-9]/).test(str);
    },

    containsRepeatingLetter : function(str) {
        return (/([A-z])\1+/).test(str);
    },

    endsWithVowel : function(str) {
        return (/[aeiou]$/i).test(str);
    },

    captureThreeNumbers : function(str) {
        var expression = new RegExp(/[0-9]{3}/), result = false;
        if(expression.test(str)) {
            result = expression.exec(str)[0];
        }
        return result;
    },

    matchesPattern : function(str) {
        var pattern = new RegExp(/^\d{3}-?\d{3}-?\d{4}$/);
        return pattern.test(str);
    },
    isUSD : function(str) {
        var pattern = new RegExp(/^\$[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/);
        return pattern.test(str);
    }
  };
});

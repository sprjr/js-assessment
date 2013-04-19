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
        var pattern = new RegExp(/[0-9]{3,3}-[0-9]{3,3}-[0-9]{4,4}/);
        console.log(str, pattern);
        console.log(pattern.test(str));
        return pattern.test(str);

    },
    isUSD : function(str) {

    }
  };
});

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number

      var test = (typeof num === 'number') ? num : false,
        string = '';

      if(typeof test !== 'boolean') {
        if(test%3 === 0) { string = 'fizz'; }
        if(test%5 === 0) { string = string + 'buzz'; }
      }

      return (string) ? string : test;
    }
  };
});

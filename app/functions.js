if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        // alternatives for "this" - {}? fn?
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(secondString) {
            return str + ', ' + secondString;
        };
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
        var results = 0;
        for(var i=0, j=arguments.length; i<j; i++) {
            results += arguments[i];
        }

        return results;
    },

    callIt : function(fn) {
        var argFn, args = [];

        for(var key in arguments) {
            if(typeof arguments[key] !== 'function') {
                args.push(arguments[key]);
            } else if (typeof arguments[key] === 'function' && argFn === undefined) {
                argFn = arguments[key];
            }
        }

        return argFn.apply(null, args);
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {
        if(typeof fn === 'function') {
            return fn;
        }
    }
  };
});

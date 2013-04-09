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
        var i = 0, j=arr.length, results =[];

        for(i; i<j; i++) {
            var closed = (function(val){
                return function(){
                    return fn(val);
                };
            })(arr[i]);
            results.push( closed );
        }

        return results;
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
        var curry, oldX, oldY, oldZ;

        if(typeof fn === 'function') {
            curry = fn;
        }

        var curryX = function(x) {
            oldX = x;
            return curryY;
        };

        var curryY = function(y) {
            oldY = y;
            return curryZ;
        };

        var curryZ = function(z) {
            oldZ = z;
            return curry(oldX, oldY, oldZ);
        };

        return curryX;

    }
  };
});

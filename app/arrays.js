if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var results = 0;
        for (var i=0, j=arr.length; i<j; i++) {
            results += arr[i];
        }
        return results;
    },

    remove : function(arr, item) {
        do {
            arr.splice( arr.indexOf(item), 1 );
        } while (arr.indexOf(item) !== -1);

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        // totally do not understand what this vs remove()
        // was supposed to look like?
        do {
            arr.splice( arr.indexOf(item), 1 );
        } while (arr.indexOf(item) !== -1);

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i=0, j=arr.length; i<j; i++) {
            if (arr[i] === item) count++;
        }

        return count;
    },

    duplicates : function(arr) {
        var dupes = {},
            results =[];

        for(var i=0, j=arr.length; i<j; i++) {

            if( dupes.hasOwnProperty(arr[i]) ) {
                dupes[arr[i]]++;
            } else {
                dupes[arr[i]] = 0;
            }
        }

        for(var key in dupes) {
            if(dupes[key] > 0) {
                results.push(key);
            }
        }

        return results;
    },

    square : function(arr) {
        for(var i=0, j=arr.length; i<j; i++){
            arr[i] = arr[i]*arr[i];
        }

        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occurances = [];
        for(var i=0, j=arr.length; i<j; i++) {
            if(arr[i] === target) {
                occurances.push(i);
            }
        }

        return occurances;
    }
  };
});

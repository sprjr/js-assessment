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

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});

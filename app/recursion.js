if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		listFiles: function(data, dirName) {
			var recurseFileList = [];

			if(data.files) {
				for (var i = 0; i < data.files.length; i++) {
					var item = data.files[i];

					if(!dirName) {

						if(typeof item === 'string') {
							recurseFileList.push(item);
						} else if(typeof item === 'object') {
							recurseFileList = recurseFileList.concat( this.listFiles(item, dirName) );
						}
					} else {
						// given a dirName, it matches, and the item is a file name - add to array
						if(typeof item === 'string' && data.dir === dirName) {
							recurseFileList.push(item);
						}

						// honestly kind of fuzzy on this logic
						if(typeof item === 'object' && item.dir === dirName) {
							recurseFileList = recurseFileList.concat( this.listFiles(item) );
						}

					}
				}
			}

			return recurseFileList;
		},

		permute: function(arr) {
			// http://stackoverflow.com/a/11509565/54468
            var temp    = [];
            var answer  = [];

		    return doIt(arr);

			function doIt(a) {
				var i, len, item;

				for (i = 0, len = arr.length; i < len; i++) {
					// remove the item at index i
					item = arr.splice(i, 1)[0];

					// add that item to the array we're building up
					temp.push(item);

					if (arr.length) {
						// if there's still anything left in the array,
						// recurse over what's left
						doIt(arr);
					} else {
						// otherwise, log the result and move on
						logResult();
					}

					// restore the item we removed at index i
					// and remove it from our temp array
					arr.splice(i, 0, item);
					temp.pop();
				}

				return answer;
			}

			function logResult() {
				answer.push(
					// make a copy of temp using .slice()
					// so we can continue to work with temp
					temp.slice()
				);
			}
		}
	};
});
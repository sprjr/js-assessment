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
			console.log(arr);
		}
	};
});
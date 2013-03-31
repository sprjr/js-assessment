if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		listFiles: function(data, dirName) {
			var recurseFileList = [];

			if(data.files) {
				for (var i = 0; i < data.files.length; i++) {
					var item = data.files[i];
					if(typeof item === 'string') {
						if(dirName !== undefined && dirName === data.dir) {
							// console.log('directory sent: ' + dirName, data.dir);
							recurseFileList.push(item);
						} else {
							// console.log('directory not sent: ' + dirName, data.dir);
							recurseFileList.push(item);
						}
					} else if(typeof item === 'object') {
						recurseFileList = recurseFileList.concat( this.listFiles(item, dirName) );
					}
				}
			}

			return recurseFileList;
		},

		permute: function(arr) {

		}
	};
});
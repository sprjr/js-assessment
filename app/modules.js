if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        var Module = function(greeting, name){
            return {
                sayIt: function(){
                    return this.greeting + ', ' + this.name;
                },
                name: name,
                greeting: greeting
            };
        };

        return new Module(str1, str2);
    }
  };
});


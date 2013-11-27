if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var deferred = $.Deferred();

        setTimeout(function () { deferred.resolve(value); }, 1337);

        return deferred;
    },

    manipulateRemoteData : function(url) {
        var deferred = $.Deferred();

        $.ajax(url)
            .then(function (data) {
                var people = _.chain(data.people)
                    .map(function (person) {
                        return person.name;
                    })
                    .value()
                    .sort();

                deferred.resolve(people);
            });

        return deferred;
    }
  };
});

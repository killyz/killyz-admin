(function () {

    var app = angular.module('killyz');

    app.factory('ArtistService', artistService);

    function artistService($http, $q) {
        return {
            getAllArtists: function () {
                var d = $q.defer();
                d.resolve($http.get("http://localhost:8080/killyz-api/artist/getAll"));
                return d.promise;
            },

            saveArtist: function (data) {
                var d = $q.defer();
                var config = {'Content-Type':'application/json'};
                d.resolve($http.post("http://localhost:8080/killyz-api/artist/new", data, config));
                return d.promise;
            },

            deleteArtist: function (data) {
                var d = $q.defer();
                var artistData = JSON.stringify({_id:data});
                var config = {'Content-Type':'application/x-www-form-urlencoded'};
                d.resolve($http.post("http://localhost:8080/killyz-api/artist/delete", artistData, config));
                return d.promise;
            },

            // getAllArtistNames: function () {
            //     var d = $q.defer();
            //     d.resolve($http.get("http://localhost:8080/killyz-api/artist/getAllNames"));
            //     return d.promise;
            // },
            
            getAllPaymentPlatforms: function () {
                var d = $q.defer();
                d.resolve($http.get("http://localhost:8080/killyz-api/artist/getAllPaymentPlatforms"));
                return d.promise;
            },

            getAllPaymentMethods: function () {
                var d = $q.defer();
                d.resolve($http.get("http://localhost:8080/killyz-api/artist/getAllPaymentMethods"));
                return d.promise;
            }
        }
    }

})();
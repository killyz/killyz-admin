(function () {
    
    var app = angular.module('killyz');
    
    app.factory('ModelService', modelService);

    function modelService($http, $q) {
        return {
            getAllModels: function () {
                var d = $q.defer();
                d.resolve($http.get("http://localhost:8080/killyz-api/model/getAll"));
                return d.promise;
            },
            
            saveModel: function (data) {
                var fd = new FormData();
                var modelJson = JSON.stringify({
                    title: data.title,
                    artistId: data.artist._id
                });
                var image = data.image;
                fd.append('image', image);
                fd.append('model', modelJson);
                var d = $q.defer();
                d.resolve($http.post("http://localhost:8080/killyz-api/model/new", fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }));
                return d.promise;
            }
        }
    }
    
})();
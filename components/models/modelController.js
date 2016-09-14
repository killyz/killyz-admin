(function () {

    var app = angular.module('killyz');

    app.controller('ModelController', modelController);

    function modelController($scope, $rootScope, ModelService, ArtistService, $location) {
        var vm = this;
        vm.global = $rootScope;
        $scope.newModel = {};
        init();

        vm.getArtistName = function (data) {
            vm.lookupId = data;
            var artist = vm.global.artists.find(findArtist);
            return artist.firstName + " " + artist.lastName;
        };

        vm.submit = function () {
            ModelService.saveModel(vm.model).then(function success(response) {
                getModels();
                $location.path('/models');
            }, function error(error) {
                throw error;
            });
        };

        // todo - clear image preview
        vm.clear = function () {
            vm.model = null;
        };
        
        function findArtist(artist) {
            return artist._id === vm.lookupId;
        }

        function init() {
            getArtists();
            getModels();
        }

        function getArtists() {
            ArtistService.getAllArtists().then(function success(response) {
                vm.global.artists = response.data;
            }, function error(error) {
                throw error;
            });
        }
        
        function getModels() {
            ModelService.getAllModels().then(function success(response) {
                vm.global.models = response.data;
            }, function error(error) {
                throw error;
            });
        }
    }

})();
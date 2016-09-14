(function () {

    var app = angular.module('killyz');

    app.controller('ArtistController', artistController);

    function artistController(ArtistService, $rootScope, $location) {
        var vm = this;
        vm.global = $rootScope;
        vm.artist = {};
        vm.showDeleteOption = false;
        init();

        vm.submit = function () {
            ArtistService.saveArtist(vm.artist).then(function success(response) {
                getArtists();
                $location.path('/artists');
            }, function error(error) {
                throw error;
            });  
        };
        
        vm.clear = function () {
          vm.artist = null;
        };

        vm.showDelete = function () {
            vm.showDeleteOption = true;
        };

        vm.hideDelete = function () {
            vm.showDeleteOption = false;
        };
        
        vm.deleteArtist = function (data) {
            ArtistService.deleteArtist(data).then(function success(response) {
                getArtists();
                vm.hideDelete();
                $location.path('/artists');
            }, function error(error) {
                throw error;
            })
        };

        function init() {
            getArtists();
            getPaymentPlatforms();
            getPaymentMethods();
        }

        function getArtists() {
            ArtistService.getAllArtists().then(function success(response) {
                vm.global.artists = response.data;
            }, function error(error) {
                throw error;
            });
        }
        
        function getPaymentPlatforms() {
            ArtistService.getAllPaymentPlatforms().then(function success(response) {
                vm.global.platforms = response.data;
            }, function error(error) {
                throw error;
            })
        }

        function getPaymentMethods() {
            ArtistService.getAllPaymentMethods().then(function success(response) {
                vm.global.methods = response.data;
            }, function error(error) {
                throw error;
            })
        }
    }

})();
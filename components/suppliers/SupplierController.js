(function () {

    var app = angular.module('killyz');

    app.controller('SupplierController', supplierController);

    function supplierController(SupplierService, CountryService, $rootScope, $location) {
        var vm = this;
        vm.global = $rootScope;
        vm.showDeleteOption = false;
        init();

        vm.showDelete = function () {
            vm.showDeleteOption = true;
        };

        vm.hideDelete = function () {
            vm.showDeleteOption = false;
        };

        vm.clear = function () {
            vm.supplier = null;
        };

        vm.submit = function () {
            vm.supplier.country = vm.supplier.country.name;
            SupplierService.saveSupplier(vm.supplier).then(function success(response) {
                getSuppliers();
                $location.path('/suppliers');
            }, function error(error) {
                throw error;
            });
        };
        
        vm.deleteSupplier = function (data) {
            SupplierService.deleteSupplier(data).then(function success(response) {
                getSuppliers();
                vm.hideDelete();
                $location.path('/suppliers');
            }, function error(error) {
                throw error;
            })  
        };

        function init() {
            getSuppliers();
            getCountries();
        }

        function getSuppliers() {
            SupplierService.getAllSuppliers().then(function success(response) {
                vm.global.suppliers = response.data;
            }, function error(error) {
                throw error;
            });
        }
        
        function getCountries() {
            vm.global.countries = CountryService.getCountries();
        }

    }

})();
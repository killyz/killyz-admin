(function () {
    
    var app = angular.module('killyz', ['directives', 'ui.router', 'ui.bootstrap', 'file-model']);
    
    app.config(router);

    function router($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/index");

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: "components/home/home.html"
            })

            .state('models', {
                url: '/models',
                templateUrl: "components/models/models.html"
            })

            .state('new-model', {
                url: '/new-model',
                templateUrl: "components/models/new-model.html"
            })

            .state('products', {
                url: '/products',
                templateUrl: "components/products/products.html"
            })

            .state('artists', {
                url: '/artists',
                templateUrl: "components/artists/artists.html"
            })

            .state('new-artist', {
                url: '/new-artist',
                templateUrl: "components/artists/new-artist.html"
            })

            .state('inventory', {
                url: '/inventory',
                templateUrl: "components/inventory/inventory.html"
            })

            .state('suppliers', {
                url: '/suppliers',
                templateUrl: "components/suppliers/suppliers.html"
            })

            .state('new-supplier', {
                url: '/new-supplier',
                templateUrl: "components/suppliers/new-supplier.html"
            });
    }
    
})();
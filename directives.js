(function () {

    var app = angular.module('directives', []);

    app.directive('header', header);
    app.directive('footer', footer);
    app.directive('sidebar', sidebar);

    function header() {
        return {
            restrict: "E",
            templateUrl: "components/header/header.html"
            // controller: "HeaderController",
            // controllerAs: "headerCtrl"
        }
    }
    
    function footer() {
        return {
            restrict: "E",
            templateUrl: "components/footer/footer.html"
        }
    }
    
    function sidebar() {
        return {
            restrict: "E",
            templateUrl: "components/sidebar/sidebar.html"
            // controller: "SidebarController",
            // controllerAs: "sidebarCtrl"
        }
    }

})();
"use strict";
var service = angular.module("Service", []);
var directive = angular.module("Directive", []);
var app = angular.module("ClientApp", ["ngRoute", "Service","Directive"]);

// Show Routing.
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home",
        {
            caseInsensitiveMatch: true,
            redirectTo: "/"
        });
    $routeProvider.when("/",
        {
            caseInsensitiveMatch: true,
            templateUrl: "/Client/Home",
            controller: "HomeController"
        });
    $routeProvider.when("/register",
        {
            caseInsensitiveMatch: true,
            templateUrl: "Client/Register",
            controller: "RegisterController"
        });

    $routeProvider.when("/error",
        {
            caseInsensitiveMatch: true,
            templateUrl: "/Client/Error"
        });
    $routeProvider.when("/notfound",
        {
            caseInsensitiveMatch: true,
            title: 'Not found',
            templateUrl: "/Client/NotFound"
        });
    $routeProvider.otherwise({
        redirectTo: "/"
    });

    //$locationProvider.html5Mode(false).hashPrefix("!");
}])

app.run(['$rootScope', '$window','$location','$route', 'UserService',
    function ($rootScope, $window,$location,$route, UserService) {
        $rootScope.$on('$routeChangeError', function (e, curr, prev) {
            e.preventDefault();
        });

        $rootScope.$on("$routeChangeStart", function (e, curr, prev) {
            if (curr.$$route !== undefined) {
                $rootScope.Page = {
                    title: curr.$$route.title !== undefined ? curr.$$route.title : ""
                }
            }

        });

        // Base Url of web app.
        $rootScope.BaseUrl = angular.element($('#BaseUrl')).val();

        // Load authen info:
        $rootScope.UserInfo = {
            IsAuthen: false
        };
        // 1. define function
        function checkLoginStatus() {
            var promiseGet = UserService.checkLoginStatus();
            promiseGet.then(
                function (result) {
                    if (result.data.Status === "success") {
                        // Save authen info into $rootScope
                        $rootScope.UserInfo = result.data.Data;
                        $rootScope.UserInfo.IsAuthen = true;
                    } else {
                        $rootScope.UserInfo = {
                            IsAuthen: false
                        };
                    }
                },
                function (error) {
                    // todo here.
                });
        }
        // 2. call function
        checkLoginStatus();
    }]);

"use strict";

service.service('UserService', function ($http) {

    // Function to create new Account
    this.register = function (newUser) {
        var request = $http({
            method: 'post',
            url: '/api/UserApi/Register',
            data: newUser
        });

        return request;
    }
    // Function to check login status
    this.checkLoginStatus = function () {
        var request = $http({
            method: 'get',
            url: '/api/UserApi/CheckLoginStatus',
        });

        return request;
    }
});
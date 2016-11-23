'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'noCAPTCHA' // Newly added home module
]).
config(['$routeProvider', '$locationProvider', 'noCAPTCHAProvider', function($routeProvider, $locationProvider, noCAPTCHAProvider) {
    // Set defualt view of our app to home
    //noCaptchaProvider.setSiteKey('<goweb>');

    $routeProvider.otherwise({
        redirectTo: '/home'
    });


    //$locationProvider.html5Mode(true);

}]);

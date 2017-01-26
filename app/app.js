'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'vcRecaptcha'
    // Newly added home module
]).
config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    // Set defualt view of our app to home
    //noCaptchaProvider.setSiteKey('<goweb>');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.otherwise({
        redirectTo: '/home'
    });


    //$locationProvider.html5Mode(true);

}]);

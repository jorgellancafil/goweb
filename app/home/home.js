'use strict';

angular.module('myApp.home', ['ngRoute'])

// Declared route
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
    //$locationProvider.html5Mode(true);
}])

// Home controller
.controller('HomeCtrl', ['$scope', '$http', 'noCAPTCHA', function($scope, $http, noCAPTCHA) {
    $scope.algo = "variableeeee";
    $scope.model = {
        name: "",
        mail: "",
        phone: "",
        message: "",
        plan: ""

    };

    $scope.envio = envio;

    $scope.selectplan = selectplan;

    function selectplan(type) {
        //console.log('plan', type)
        $scope.model.plan = type;
    }

    function envio() {

        //alert('El sitio se encuentra en migración de tecnología, favor envíe su mensaje a contacto@gowebchile.cl o en nuestras redes sociales facebook.com/gowebchile');
        //return;
        //alert('enviando test');
        $http({
            url: 'sendemail.php',
            method: 'POST',
            data: {
                /*'nome': $scope.user.nome,
                'email': $scope.user.email,
                'mensagem': $scope.user.email,
*/
                'name': 'algoo',
                'email': 'email',
                'mensaje': 'mensaaaaje',
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }

        }).
        success(function(data) {
            swal({
                title: "En Desarrollo",
                text: "El sitio se encuentra en migración de tecnología, favor envíe su mensaje a contacto@gowebchile.cl o en nuestras redes sociales facebook.com/gowebchile!",
                type: "success",
                confirmButtonText: "OK"
            });
        }).
        error(function(data) {
            swal({
                title: "Error!",
                text: "Correo no fue enviado con éxito!",
                type: "error",
                confirmButtonText: "Cool"
            });

        });
    }

}]);

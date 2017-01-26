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
.controller('HomeCtrl', ['$scope', '$http', 'vcRecaptchaService', function($scope, $http, recaptcha) {
  $scope.algo = "variableeeee";
  $scope.model = {
    name: "",
    mail: "",
    phone: "",
    message: "",
    plan: "",
    responseKey: '',
    validation: ''

  };
  $scope.publicKey = "6LchxgwUAAAAACmIyTB_myd5-zWqBd-c8B6gHE0_";
  var pKey = '6LchxgwUAAAAAMiXapnSxKBm4nlTF37BTwebvKot';
  $scope.envio = envio;
  $scope.selectplan = selectplan;
  $scope.googleVerify = googleVerify;
  $scope.num1 = 0;
  $scope.num2 = 0;
  generate();

  $scope.setWidgetId = function(widgetId) {
    // store the `widgetId` for future usage.
    // For example for getting the response with
    // `recaptcha.getResponse(widgetId)`.
    console.log('widgetiD', widgetId)
  };

  $scope.setResponse = function(response) {
    // send the `response` to your server for verification.
    console.log('response', response)

    $http({
        url: 'https://www.google.com/recaptcha/api/siteverify',
        method: "POST",
        dataType: 'jsonp',
        data: {
          'secret': pKey,
          'response': response
        },
        headers: {
          'Access-Control-Allow-Methods': 'POST',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(function(response) {
          // success
          console.log('success!!', response)
          alert('ok');
        },
        function(response) { // optional
          // failed
          console.log('fail!', response)
          alert('Verificación de captcha en desarrollo');
        });


  };

  function selectplan(type) {
    //console.log('plan', type)
    $scope.model.plan = type;
  }

  function googleVerify() {

    envio();
    return;

    $http({
      url: 'https://www.google.com/recaptcha/api/siteverify',
      method: 'POST',
      data: {
        'secret': '6LchxgwUAAAAAMiXapnSxKBm4nlTF37BTwebvKot',
        'response': ''
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
          //'Accept': 'application/json',
          //'Content-Type': 'application/json',
          //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      }

    }).
    success(function(data) {
      console.log('todo ok', data)
    }).
    error(function(data) {
      console.log('no hay mano', data)
    });
  }

  function generate() {
    $scope.num1 = (Math.ceil(Math.random() * 9));
    $scope.num2 = (Math.ceil(Math.random() * 9));
    $scope.tmpRes = $scope.num1 + $scope.num2;
    $scope.txtTmp = getTxt($scope.num1) + " + " + getTxt($scope.num2);
  }

  function getTxt(num) {
    num = parseInt(num);
    var txt = "";
    switch (num) {
      case 1:
        txt = "UNO"
        break;
      case 2:
        txt = "DOS"
        break;
      case 3:
        txt = "TRES"
        break;
      case 4:
        txt = "CUATRO"
        break;
      case 5:
        txt = "CINCO"
        break;
      case 6:
        txt = "SEIS"
        break;
      case 7:
        txt = "SIETE"
        break;
      case 8:
        txt = "OCHO"
        break;
      case 9:
        txt = "NUEVE"
        break;
      case 0:
        txt = "CERO"
        break;
    }
    return txt;
  }

  function envio() {

    //alert('El sitio se encuentra en migración de tecnología, favor envíe su mensaje a contacto@gowebchile.cl o en nuestras redes sociales facebook.com/gowebchile');
    //return;
    //alert('enviando test');
    if ($scope.tmpRes != $scope.model.validation) {
      $scope.model.validation = '';
      swal({
        title: "Error!",
        text: "Validación de suma no es correcta!",
        type: "error",
        confirmButtonText: "Ok"
      });
      generate();
      return;
    }


    if (
      $scope.model.name == "" ||
      $scope.model.email == "" ||
      $scope.model.message == "" ||
      $scope.model.phone == "" ||
      $scope.model.plan == "") {
      swal({
        title: "Error!",
        text: "Complete los datos antes de enviar!",
        type: "error",
        confirmButtonText: "Ok"
      });
      return;
    }


    $http({
      url: 'sendemail.php',
      method: 'POST',
      data: {
        'name': $scope.model.name,
        'email': $scope.model.email,
        'message': $scope.model.message,
        'phone': $scope.model.phone,
        'plan': $scope.model.plan
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      }

    }).
    success(function(data) {
      generate();
      swal({
        title: "Mensaje Enviado",
        text: "Pronto nos pondremos en contacto con usted.",
        type: "success",
        confirmButtonText: "Ok"
      });
    }).
    error(function(data) {
      generate();
      swal({
        title: "Error!",
        text: "Mensaje no fue enviado!",
        type: "error",
        confirmButtonText: "Ok"
      });

    });
  }

}]);

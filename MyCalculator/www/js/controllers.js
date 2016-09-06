angular.module('starter.controllers', [])

.controller("CalculatorCtrl", function ($scope) {
    $scope.result = 0;
    var operateur;
    var tab = [];
    var tmp = 0;
    var chart = [];
    var tmp2;
    $scope.operators = function (x) {
        $scope.getResult();
        tmp = $scope.result;
        tab = [];
        operateur = x;
        $scope.result = operateur;
    }

    $scope.figure = function (x) {
        tab.push(x);
        $scope.result = tab.join('');
    }

    $scope.getResult = function () {
        if (operateur === '+') {
            $scope.result += tmp;
        } else if (operateur === '-') {
            $scope.result = tmp - $scope.result;
        } else if (operateur === '*') {
            $scope.result *= tmp;
        } else if (operateur === '%') {
            $scope.result *= tmp / $scope.result;
        }
    }

    $scope.destruct = function () {
        tmp = 0;
        tab = [];
        $scope.result = 0;
    }
});
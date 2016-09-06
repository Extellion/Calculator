angular.module('starter.controllers', [])

.controller("CalculatorCtrl", function ($scope) {
    $scope.result = 0;
    var operateur;
    var tab = [];
    var tmp = 0;

    $scope.operators = function (x) {
        $scope.getResult();
        tmp = $scope.result;
        tab = [];
        $scope.result = 0;
        operateur = x;
    }

    $scope.numbers = function (x) {
        tab.push(x);
        $scope.result = tab.join('') *1;
    }

    $scope.getResult = function () {
        if (operateur === 1) {
            $scope.result += tmp;
        } else if (operateur === 2) {
            $scope.result = tmp - $scope.result;
        } else if (operateur === 3) {
            $scope.result *= tmp;
        } else if (operateur === 4) {
            $scope.result *= tmp / $scope.result;
        }
    }

    $scope.destruct = function () {
        tmp = 0;
        tab = [];
        $scope.result = 0;
    }
})
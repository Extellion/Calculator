angular.module('starter.controllers', [])

.controller("CalculatorCtrl", function ($scope) {
    $scope.result = 0;
    var operator = 0;
    var tab = [];
    var tmp = 0;
    var chart = [];
    var i = 0;

    $scope.figure = function (x) {
        tab.push(x);
        $scope.result = tab.join('') *1;
    }

    $scope.operators = function (x) {
        tmp = $scope.result;
        tab = [];
        operator = x;
        $scope.result = 0;
    }

    $scope.getResult = function () {
        if (operator === '+') {
            $scope.result += tmp;
            $scope.stock();
        } else if (operator === '-') {
            $scope.result = tmp - $scope.result;
            $scope.stock();
        } else if (operator === '*') {
            $scope.result *= tmp;
            $scope.stock();
        } else if (operator === '%') {
            $scope.result *= tmp / $scope.result;
            $scope.stock();
        }
    }

    $scope.stock = function () {
        i++;
        chart.push({result: $scope.result, number: i + " result"});
        localStorage.setItem("Data", JSON.stringify(chart));
    }

    $scope.destruct = function () {
        tmp = 0;
        tab = [];
        $scope.result = 0;
        operator = 0;
    }
})

.controller('AmChartsController', function() {

    var d = JSON.parse(localStorage.getItem("Data"));

    var chart = AmCharts.makeChart("amchart", {
        "type": "serial",
        "theme": "light",
        "dataProvider": d,
        "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
            "ballonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "result"
        }],
        "categoryField": "number",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 150
        },
        "export": {
            "enabled": true
        }
    })
});
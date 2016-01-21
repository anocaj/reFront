'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.firstname = {
        text: 'firstname'
    }
    $scope.lastname = {
        text: 'lastname'
    }
    $scope.street = {
        text: 'street'
    }
    $scope.city = {
        text: 'city'
    }
    $scope.zip = {
        text: 'zip'
    }
}]);
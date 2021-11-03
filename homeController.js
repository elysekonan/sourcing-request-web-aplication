var app = angular.module('CIS Sourcing Tracker');
app.controller('HomeController',
    function($scope, $rootScope, $stateParams, $state, LoginService) {
        $scope.user = $rootScope.userName;
    });
var app = angular.module('sourcing-request-web-application');
app.controller('HomeController',
    function($scope, $rootScope, $stateParams, $state, LoginService) {
        $scope.user = $rootScope.userName;
    });
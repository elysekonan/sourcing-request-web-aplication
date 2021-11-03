var app = angular.module('CIS Sourcing Tracker');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "User Login";
    $scope.formSubmit = function() {
        if (LoginService.login($scope.username, $scope.password)) {
            $rootScope.userName = $scope.username;
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('home');
        } else {
            $scope.error = "Incorrect username/password !";
        }
    };
});
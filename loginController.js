var app = angular.module('sourcing-request-web-application');
app.controller('LoginController', function($scope, $rootScope, UsersApi, $state, LoginService) {
    this.cancel = $scope.$dismiss;

    this.submit = function(username, password) {
        UsersApi.login(username, password).then(function(user) {
            $scope.$close(user);
        });

    };


    $rootScope.title = "User Login";
    $scope.formSubmit = function() {
        if (LoginService.login($scope.username, $scope.password)) {
            $rootScope.userName = $scope.username;
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('/home.html');
        } else {
            $scope.error = "Incorrect username/password !";
        }
    };
});
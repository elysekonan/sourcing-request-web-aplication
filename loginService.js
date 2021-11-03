var app = angular.module('sourcing-request-web-application');
app.factory('LoginService', function() {
    var admin = 'admin';
    var pass = 'admin';
    var isAuthenticated = false;
    return {
        login: function(username, password) {
            isAuthenticated = username === admin && password === pass;
            return isAuthenticated;
        },
        isAuthenticated: function() {
            return isAuthenticated;
        }
    };
});

app.service('LoginService', function($modal, $rootScope) {

    function assignCurrentUser(user) {
        $rootScope.currentUser = user;
        return user;
    }

    return function() {
        var instance = $modal.open({
            templateUrl: '/login.html',
            controller: 'LoginController',
            controllerAs: 'LoginController'
        })

        return instance.result.then(assignCurrentUser);
    };

});
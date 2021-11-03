(function() {
    var app = angular.module('sourcing-request-web-application', ['ui.router']);
    app.run(function($rootScope, $location, $state, LoginService) {
        console.clear();
        console.log('running');
        $rootScope.$on('$stateChangeStart', function(event, to$State, toParams) {
            var requireLogin = to$State.data.requireLogin;
            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
            }
        })
        if (!LoginService.isAuthenticated()) {
            $state.transitionTo('login');
        }
    });
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'login.html',
                    controller: 'LoginController.js',
                    data: {
                        requireLogin: false
                    }
                })
                .state('home', {
                    url: '/home',
                    abstract: true,
                    templateUrl: 'home.html',
                    controller: 'HomeController.js',
                    data: {
                        requireLogin: true
                    }
                })
                .state('home.create', {
                    url: '/create',
                    templateUrl: 'edit.html',
                    controller: 'EditController.js',
                    data: {
                        requireLogin: true
                    }
                })
                .state('home.search', {
                    url: '/search',
                    templateUrl: 'search.html',
                    controller: 'SearchController.js',
                    data: {
                        requireLogin: true
                    }
                })
                .state('home.edit', {
                    url: '/edit',
                    templateUrl: 'edit.html',
                    controller: 'EditController.js',
                    data: {
                        requireLogin: true
                    }
                });
            $urlRouterProvider.otherwise('/login');
        }
    ]);
})();
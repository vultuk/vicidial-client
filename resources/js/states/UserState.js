VicidialClient.config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {
  $stateProvider
    .state('users', {
        url: '/users',
        title: 'Users',
        templateUrl : './partials/admin/users/index.html'
    })
    .state('users.list', {
        url: '/list',
        title: 'User List',
        templateUrl : './partials/admin/users/list.html'
    })
}]);

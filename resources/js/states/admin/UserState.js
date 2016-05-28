VicidialClient.config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {
  $stateProvider
    .state('admin.users', {
        url: '/users',
        title: 'Users',
        templateUrl : './partials/admin/users/index.html'
    })
    .state('admin.users.list', {
        url: '/list',
        title: 'User List',
        templateUrl : './partials/admin/users/list.html',
        controller: 'UserListController'
    })
    .state('admin.users.add', {
        url: '/add',
        title: 'Add User',
        templateUrl : './partials/admin/users/add.html'
    })
}]);

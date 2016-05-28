VicidialClient.config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {
  $stateProvider
    .state('admin', {
        url: '/admin',
        title: 'Admin',
        templateUrl: './partials/admin/dashboard.html'
    })
}]);

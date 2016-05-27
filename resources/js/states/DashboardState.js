VicidialClient.config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {
  $stateProvider
    .state('dashboard', {
        url: '/',
        title: 'Dashboard',
        templateUrl : './partials/admin/dashboard.html'
    })
}]);

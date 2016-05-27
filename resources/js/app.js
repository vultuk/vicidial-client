var VicidialClient = angular.module('VicidialClient', ['ui.router'])
  .config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  }]);

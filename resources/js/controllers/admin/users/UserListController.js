VicidialClient.controller('UserListController', [
  '$scope', '$stateParams', function ($scope, $stateParams) {



    // Create a temporary array until we pull back the details from
    // the actual server.
    $scope.users = {
      data: [
          {
          userId: '1',
          fullName: 'Joe Blogs',
          userLevel: 8,
          userGroup: 'Admin',
          active: true,
        },
        {
          userId: '2',
          fullName: 'Jill Turner',
          userLevel: 1,
          userGroup: 'Admin',
          active: true,
        },
        {
          userId: '3',
          fullName: 'Bobby Foresight',
          userLevel: 1,
          userGroup: 'Admin',
          active: false,
        }
      ],
      meta: []
    };
  }]);

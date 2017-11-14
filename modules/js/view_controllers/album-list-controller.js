(function() {


    app.controller('AlbumListViewController', function($scope, $routeParams) {
        $scope.album_name = $routeParams.album_name;
    });

    if (values[$scope.album_name]) {
        $scope.photos = values[$scope.album_name]
    }
})();
(function() {
    app.controller('AlbumListViewController', function($scope, $routeParams, albumProvider) {
        $scope.album_name = $routeParams.album_name;

        albumProvider.getAlbumByName($scope.album_name, function(error, data) {
            if (error) {
                $scope.load_error = error.message;
            } else {
                if (data.length === 0) {
                    $scope.load_error = 'No images to be displayed.'
                } else {
                    $scope.photos = data;
                }
            }
        });
    });
})();
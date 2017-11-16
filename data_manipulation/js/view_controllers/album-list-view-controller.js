(function() {
    app.controller('AlbumListViewController', function($scope, $routeParams, albumProvider) {
        var photos;

        $scope.album_name = $routeParams.album_name;

        photos = albumProvider.getAlbumByName($scope.album_name);

        if (photos) {
            $scope.photos = photos;
        } else {
            $scope.load_error_text = 'I couldnt find filename.'
        }
    });
})();
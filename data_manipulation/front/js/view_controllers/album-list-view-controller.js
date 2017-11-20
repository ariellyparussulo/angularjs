(function() {
    app.controller('AlbumListViewController', function($scope, $routeParams, albumProvider) {
        $scope.album_name = $routeParams.album_name;


        albumProvider.getAlbumByName($scope.album_name, function(error, data) {
            if (error) {
                $scope.load_error_text = 'I couldnt find filename.';
            } else {
                $scope.photos = data;
            }
        });
    });
})();
(function() {
    app.controller('AlbumListController', function($scope, $location, albumProvider) {
        loadData($scope, albumProvider);

        $scope.addAlbum = function(new_album) {
            albumProvider.addAlbum(new_album, function(error, data) {
                if (error) {
                    $scope.add_album_error = error.message;
                } else {
                    $location.path('/albums/' + new_album.name);
                }
            });
        };
    });

    function loadData($scope, albumProvider) {
        albumProvider.getAlbums(function(error, data) {
            if (error) {
                $scope.page_load_error = 'Unexpected error loading albums: ' + error.message;
            } else {
                $scope.albums = data;
            }
        });
    }
})();
(function() {
    app.controller('AlbumListController', function($scope, albumProvider) {
        $scope.albums = albumProvider.getAlbums();

        $scope.addAlbum = function(new_album) {
            try {
                albumProvider.addAlbum(new_album);
                $scope.albums = albumProvider.getAlbums();
                $scope.add_album_error = '';
                $scope.adding_album = {};
            } catch (e) {
                $scope.add_album_error = e.message;
            }

        };
    });
})();
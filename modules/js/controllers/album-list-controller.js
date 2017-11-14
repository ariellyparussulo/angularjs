(function() {
    app.controller('AlbumListController', function($scope) {
        $scope.albums = values;

        $scope.addAlbum = function(new_album) {
            if (typeof new_album === 'undefined') {
                $scope.add_album_error = 'Missing title';
                return;
            }
            if (!new_album.title) {
                $scope.add_album_error = 'Missing title';
            } else if (!new_album.date || !validateDate(new_album.date)) {
                $scope.add_album_error = 'Date is not correct.';
            } else if (!new_album.description) {
                $scope.add_album_error = 'Missing description.';
            } else if (!new_album.name) {
                $scope.add_album_error = 'Missing short name.';
            } else {
                $scope.add_album_error = '';
                $scope.albums.push(new_album);
                $scope.adding_album = {};
            }
        };

        function validateDate(date) {
            if (date.match(/[0-9]{2,4}\/[0-9]{1,2}\/[0-9]{1,2}/)) {
                return true;
            }

            return false;
        }
    });
})();
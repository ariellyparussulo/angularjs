(function() {
    app.service('albumProvider', function($http) {
        const ROOT_PATH = '/v1/albums/';
        const ALBUMS_URL = '/v1/albums.json';


        this.getAlbums = function(callback) {
            $http.get(ALBUMS_URL).success(function(data) {
                callback(null, data);
            }).error(function(error) {
                callback(error);
            });
        }

        this.getAlbumByName = function(name, callback) {
            const PHOTOS_PATH = ROOT_PATH + name + '/photos.json';
            $http.get(PHOTOS_PATH).success(function(data) {
                callback(null, data);
            }).error(function(error) {
                callback(error);
            });
        }

        this.addAlbum = function(albumData, callback) {
            var parseAlbumData = JSON.parse(JSON.stringify(albumData));

            if (!parseAlbumData.name) {
                return callback('Missing Name');
            }

            if (!parseAlbumData) return callback('Missing title');

            if (!parseAlbumData.title) return callback('Missing title');
            if (!parseAlbumData.date || !validateDate(parseAlbumData.date)) return callback('Date is not correct.');
            if (!parseAlbumData.description) return callback('Missing description.');
            if (!parseAlbumData.name) return callback('Missing short name.');

            $http.put(ALBUMS_URL, parseAlbumData).success(function(data) {
                callback(null, data);
            }).error(function(error) {
                callback(error);
            });

        };

        function validateDate(date) {
            if (date.match(/[0-9]{2,4}\/[0-9]{1,2}\/[0-9]{1,2}/)) {
                return true;
            }

            return false;
        }
    });
})();
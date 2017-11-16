(function() {
    app.service('albumProvider', function() {
        var albums = [{
            name: 'madrid',
            title: 'Madrid',
            date: '2017-09-01',
            description: 'A trip to madrid',
            photos: [{
                    filename: 'madrid1.jpeg',
                    date: '2017/10/10',
                    description: 'assssssssssss'
                },
                {
                    filename: 'madrid2.jpg',
                    date: '2017/10/10',
                    description: 'assssssssssss'
                }
            ]
        }, {
            name: 'iceland',
            title: 'iceland',
            date: '2017-09-02',
            description: 'A trip to iceland',
            photos: [{
                    filename: 'iceland1.jpg',
                    date: '2015/10/10',
                    description: ''
                },
                {
                    filename: 'iceland2.jpeg',
                    date: '2015/10/10',
                    description: ''
                }
            ]
        }, {
            name: 'thailand',
            title: 'thailand',
            date: '2017-09-10',
            description: 'A trip to thailand',
            photos: [{
                    filename: 'thailand1.jpg',
                    date: '2016/10/10',
                    description: ''
                },
                {
                    filename: 'thailand2.jpg',
                    date: '2016/10/10',
                    description: ''
                }
            ]
        }];

        this.getAlbums = function() {
            return JSON.parse(JSON.stringify(albums));
        }

        this.getAlbumByName = function(name) {
            var photos = [];
            albums.forEach(function(album) {
                if (name.toLowerCase() === album.name) {
                    photos = album.photos;
                }
            });
            return JSON.parse(JSON.stringify(photos));
        }

        this.addAlbum = function(albumData) {
            var parseAlbumData = JSON.parse(JSON.stringify(albumData));

            if (!parseAlbumData.name) {
                throw new Error('Missing Name');
            }

            albums.forEach(function(album) {
                if (album.name === parseAlbumData.name) {
                    throw new Error('Duplicated Data');
                }
            });

            if (!parseAlbumData) throw new Error('Missing title');

            if (!parseAlbumData.title) throw new Error('Missing title');
            if (!parseAlbumData.date || !validateDate(parseAlbumData.date)) throw new Error('Date is not correct.');
            if (!parseAlbumData.description) throw new Error('Missing description.');
            if (!parseAlbumData.name) throw new Error('Missing short name.');

            albums.push(parseAlbumData);
        };

        function validateDate(date) {
            if (date.match(/[0-9]{2,4}\/[0-9]{1,2}\/[0-9]{1,2}/)) {
                return true;
            }

            return false;
        }
    });
})();
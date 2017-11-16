(function() {
    app.controller('AlbumListViewController', function($scope, $routeParams) {
        var photos = {
            'madrid': [{
                    filename: 'madrid1.jpeg',
                    date: '2017/10/10',
                    description: 'assssssssssss'
                },
                {
                    filename: 'madrid2.jpg',
                    date: '2017/10/10',
                    description: 'assssssssssss'
                }
            ],
            'iceland': [{
                    filename: 'iceland1.jpg',
                    date: '2015/10/10',
                    description: ''
                },
                {
                    filename: 'iceland2.jpeg',
                    date: '2015/10/10',
                    description: ''
                }
            ],
            'thailand': [{
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
        };

        $scope.album_name = $routeParams.album_name;

        if (photos[$scope.album_name]) {
            $scope.photos = photos[$scope.album_name]
        } else {
            $scope.load_error_text = 'I couldnt find filename.'
        }
    });
})();
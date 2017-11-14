var app = angular.module('HelloWorldApp', ['ngRoute']),
    values = [{
        name: 'madrid',
        title: 'Madrid',
        date: '2017-09-01',
        description: 'A trip to madrid'
    }, {
        name: 'iceland',
        title: 'iceland',
        date: '2017-09-02',
        description: 'A trip to iceland'
    }, {
        name: 'thailand',
        title: 'thailand',
        date: '2017-09-10',
        description: 'A trip to thailand'
    }];

app.config(function($routeProvider) {
    $routeProvider
        .when('/albums', {
            controller: 'AlbumListController',
            templateUrl: 'partials/album_list_view_partial.html'
        })
        .when('/albums/:album_name', {
            controller: 'AlbumListViewController',
            templateUrl: 'partials/album_view_partial.html'
        })
        .when('/', {
            redirectTo: '/albums'
        })
        .otherwise({
            redirectTo: '/albums'
        });
});
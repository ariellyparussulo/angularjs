var app = angular.module('HelloWorldApp', ['ngRoute']);

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
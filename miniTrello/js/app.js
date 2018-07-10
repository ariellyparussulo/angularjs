const DATA = 'TRELLO_APP_DATA';

var app = angular.module('trello', [
    'board',
    'ngRoute',
    'boardManager'
]);

app.config(($routeProvider) => {
    $routeProvider
        .when('/board/:name', {
            templateUrl: 'board.html',
            controller: 'boardCtrl'
        })
});

app.controller('mainCtrl', ['$scope', '$element', '$window', ($scope, $element, $window) => {
    let $createBoardForm = $element.find('.boards .form'),
        $firstBoard = $element.find('.add-boards'),
        $deleteIcon = $element.find('.create-board-link .delete');
            

    if ($window.localStorage[DATA] && $window.localStorage[DATA].length > 0) {
        $scope.boardList = JSON.parse($window.localStorage[DATA]);
    } else {
        $scope.boardList = [];
    }

    $scope.isNewBoardFormOpen = false;
    $scope.newBoardName = '';

    $scope.openNewBoardForm = (openBoard, event) => {
        if (openBoard && !$scope.isNewBoardFormOpen){
           showForm();
        }
        
        if (!openBoard && $scope.isNewBoardFormOpen) {
           hideForm();
        }

        event.stopPropagation();
    };

    $scope.cancelNewForm = (event) => {
        hideForm();
        $scope.newBoardName = '';
        event.stopPropagation();
    };

    $scope.createNewBoard = (event) => {
        $scope.boardList.push({
            boardPath: `board/${$scope.newBoardName}`,
            boardName: $scope.newBoardName
        });

        $scope.newBoardName = '';
        $window.localStorage[DATA] = JSON.stringify($scope.boardList);

        event.stopPropagation();
    };

    function showForm () {
        $createBoardForm.show();
        $firstBoard.addClass('add-cursor');
        $firstBoard.addClass('remove-cursor');
        $deleteIcon.show();
        $scope.isNewBoardFormOpen = true;
    }

    function hideForm() {
        $createBoardForm.hide();
        $firstBoard.addClass('remove-cursor');
        $firstBoard.addClass('add-cursor');
        $deleteIcon.hide();
        $scope.isNewBoardFormOpen = false;
    }
  }]);

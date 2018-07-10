(() => {
    function Board () {}

    angular.module('board', [])
        .component('board', {
            templateUrl: 'components/board/template/board.html',
            controller: Board,
            bindings: {
                boardPath: '<',
                boardName: '<'
            }
        });
})();
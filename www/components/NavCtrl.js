/**
 * Alésio Margot
 * https://github.com/alesiom
 */

(function(alesiom) {
    'use strict';

    alesiom.controller('NavCtrl', ['$scope', '$location', '$http', function($scope, $location, $http){

        $scope.navigations = [];

        /**
         * Get the list of navigation elements
         */
        $http.get('components/navigation.json').success(function(navs) {
            $scope.navigations =  navs.menuElements;
        });

        /**
         * Checks if a current path is active
         *
         * @param path
         * @returns {boolean}
         */
        $scope.isActive = function(path) {
            return $location.path().substr(1, path.length) === path;
        };

        /**
         * Sends user to the given path
         *
         * @param path
         */
        $scope.goTo = function(path) {
            $location.path(path);
        };
    }]);

})(window.alesiom.app);
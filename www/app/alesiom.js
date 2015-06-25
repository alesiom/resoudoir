/**
 * Alésio Margot
 * https://github.com/alesiom
 */

(function(){
    'use strict';

    var alesiom = angular.module('alesiom',['ngRoute']);

    // Some quick configs to redistribute to the right controller and html file
    alesiom.config(function($routeProvider) {
        $routeProvider
            .when('/alesiom', {
                templateUrl:'pages/home/homepage.tpl.html'
            }).when('/', {
                redirectTo:'/alesiom'
            })
            .when('/resoudoir', {
                templateUrl:'pages/blog/resoudoir.tpl.html'
            })
            .when('/patternLibrary', {
                templateUrl:'pages/patternLibrary/patternLibrary.tpl.html'
            })
            .when('/portfolio', {
                templateUrl:'pages/portfolio/portfolio.tpl.html'
            })
            .otherwise({
                redirectTo:'/alesiom'
            });
    });

    window.alesiom = {
        app: alesiom

    };

})();
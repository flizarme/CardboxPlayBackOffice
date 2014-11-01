'use strict';


/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/addUser.html',
        controller: 'AddUserCtrl'
      })
      .when('/addUser', {
        templateUrl: 'views/addUser.html',
        controller: 'AddUserCtrl'
      })
      .when('/updateScore', {
        templateUrl: 'views/updateScore.html',
        controller: 'UpdateScoreCtrl'
      })
      .when('/leaderboard', {
        templateUrl: 'views/leaderboard.html',
        controller: 'LeaderboardCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/deleteUser', {
        templateUrl: 'views/deleteUser.html',
        controller: 'DeleteUserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });





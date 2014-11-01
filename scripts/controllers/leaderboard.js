'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LeaderboardCtrl', function ($scope) {
 

    var tableContent = '';

    $.ajax({url: 'http://localhost:3000/users/getLeaderboard',
      async: false,
      dataType: 'json',
      success: function(data) {

      
          // For each item in our JSON, add a table row and cells to the content string
          for (var user = 0; user < data.length; user++)
          {
              tableContent += '<tr>';
              tableContent += '<td>' + data[user].username + '</td>';
              tableContent += '<td>' + data[user].Score + '</td>';
              tableContent += '</tr>';

          }
   
    
      }
    });

    $('#leaderboard-table').find('tbody').append(tableContent);

  });

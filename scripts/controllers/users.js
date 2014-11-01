'use strict';
/*global $:false */

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UsersCtrl', function ($scope) {

	var tableContent = '';

    $.ajax({url: 'http://localhost:3000/users/userlist',
    	async: false,
    	dataType: 'json',
     	success: function(data) {

      
	        // For each item in our JSON, add a table row and cells to the content string
	        for (var user = 0; user < data.length; user++)
	        {
	            tableContent += '<tr>';
	            tableContent += '<td>' + data[user].username + '</td>';
	            tableContent += '<td>' + data[user].Name + '</td>';
	            tableContent += '<td>' + data[user].LastName + '</td>';
	            tableContent += '<td>' + data[user].email + '</td>';
	            tableContent += '<td>' + data[user].objectId + '</td>';
	            tableContent += '</tr>';

	        }
   
    
    	}
    });

    $('#users-table').find('tbody').append(tableContent);
  });

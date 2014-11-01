'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UpdateScoreCtrl', function ($scope) {
    
  	function updateUser(event)
  	{
		event.preventDefault();

		// Pop up a confirmation dialog
		var confirmation = confirm('Are you sure you want to update this ' + $('#usernameToUpdateInput').val() + 's score?');

		// Check and make sure the user confirmed
		if (confirmation === true) {

		    // If they did, do our delete
		    $.ajax({
		        type: 'PUT',
		        url: 'http://localhost:3000/users/updatescore/' + $('#usernameToUpdateInput').val() + 
		        '/' + $('#passwordToUpdateInput').val() + '/' + $('#scoreToUpdateInput').val()
		    }).done(function( response ) {

		        // Check for a successful (blank) response
		        if (response.msg === '') {
		            $('#usernameToUpdateInput').val('');
		            $('#passwordToUpdateInput').val('');
		            $('#scoreToUpdateInput').val('');
		        }
		        else {
		            alert('Error: ' + response.msg);
		        }

		    });

		}
	}

    $('#updateUserButton').click(updateUser);
  });

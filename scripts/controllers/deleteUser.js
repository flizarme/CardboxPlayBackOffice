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
  .controller('DeleteUserCtrl', function ($scope) {

  	function deleteUser(event)
  	{
		event.preventDefault();

		// Pop up a confirmation dialog
		var confirmation = confirm('Are you sure you want to delete this user?');

		// Check and make sure the user confirmed
		if (confirmation === true) {

		    // If they did, do our delete
		    $.ajax({
		        type: 'DELETE',
		        url: 'http://localhost:3000/users/deleteuser/' + $('#usernameToDeleteInput').val() + '/' + $('#passwordToDeleteInput').val()
		    }).done(function( response ) {

		        // Check for a successful (blank) response
		        if (response.msg === '') {
		            $('#usernameToDeleteInput').val('');
		            $('#passwordToDeleteInput').val('');
		        }
		        else {
		            alert('Error: ' + response.msg);
		        }

		    });

		}
	}

    $('#deleteUserButton').click(deleteUser);
  });

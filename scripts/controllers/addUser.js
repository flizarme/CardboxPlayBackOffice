'use strict';
/*global $:false */

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AddUserCtrl', function ($scope) {
    
   
	

	function addUser(event)
	{
		event.preventDefault();
		var newUser = {
		    'username' : $('#usernameInput').val(),
		    'password' : $('#passwordInput').val(),
		    'email' : $('#emailInput').val(),
		    'Name' : $('#nameInput').val(),
		    'LastName' : $('#lastNameInput').val(),
		    'FacebookID' : $('#facebookIDInput').val(),
		    'GoogleID' : $('#googleIDInput').val(),
		    'Score' : $('#scoreInput').val()
		};
		console.log(newUser);
		$.ajax({
		    type: 'POST',
		    data: newUser,
		    url: 'http://localhost:3000/users/adduser',
		    dataType: 'JSON'
		}).done(function(response) {

		    // Check for successful (blank) response
		    if (response.msg === '') {

		        // Clear the form inputs
		        $('#usernameInput').val('');
			    $('#passwordInput').val('');
			    $('#emailInput').val('');
			    $('#nameInput').val('');
			    $('#lastNameInput').val('');
			    $('#facebookIDInput').val('');
			    $('#googleIDInput').val('');
			    $('#scoreInput').val('');
		    }
		    else {

		        // If something goes wrong, alert the error message that our service returned
		        console.log('Error: ' + response.msg);

		    }
		});
		return false;
	}

	$("#addUserButton").click(addUser);

  });


/* AngularJS Handling scope to NavBar navbar.html */
app.controller("navbarController", function($scope, $http) {
	// Initialize the model variables
	$http.get('models/menus.json')
		.then(function(res) {
			$scope.navBarMenus = res.data;
		});
});
/* AngularJS Handling scop */
var app = angular.module("lellecaPortal", ['angularUtils.directives.dirPagination', 
	'btford.markdown']);

app.controller('staticPages', function($scope, $http) {

	// get statics urls	
	$http.get('models/urls.json') 
		.success(function(res){
			$scope.pages = res;				
	});

	// tab controller of the static pages
	$scope.tab = 'payments';
	$scope.selecTab = function(setTab) {
		$scope.tab = setTab;
	};

	$scope.isSelected = function(checkTab) {
		return $scope.tab === checkTab;
	};

});


/* UNCOMMENT WHEN SETUP LELLECAPORTAL RIGHT/DONE.
app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider
    	.setPath('../bower_components/angular-utils-pagination/dirPagination.tpl.html');
}); */

// tools, helpers, etc
function listProperties(obj, desc='Default') {
	var propList = "";
	for (var propName in obj) {
		if(typeof(obj[propName]) != "undefined") {
			propList += (propName + ", ");
		}
	}
	console.log("Results(" + desc + ": " + propList);
};


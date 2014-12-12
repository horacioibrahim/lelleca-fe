var appSupport = angular.module("supportPortalPages", ['btford.markdown',
	'angularUtils.directives.dirPagination']);

appSupport.controller('supportPages', function($scope, $http) {
	
	// It's used to interchangeable "q" between (support.html + header.html)
	$scope.activatedSearch = false;

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
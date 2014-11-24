/* AngularJS Handling scop */
var app = angular.module("store", ['angularUtils.directives.dirPagination']);

app.controller("storeController", function($scope) {
	$scope.navBarMenus = menus;
	$scope.catalog = products;
});

app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('../bower_components/angular-utils-pagination/dirPagination.tpl.html');
});

/* function for Controller */
function CatalogControllerSearch($scope) {
	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.products = [];
}

/* Data source */

var menus = ['Brinquedos', 'Livros', 'Roupas', 'Calçados', 'Enxoval', 
			'Tutoria & Cursos', 'Moldes'];
var products = [
	{
		'name': 'Flor do Cerrado',
	 	'short_desc': 'Criada com a força da mulher do cerrado e cor busca.',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': 'vermelho',
	 	'likes': 25
	},
	{
		'name': 'Ipe Amarelo',
		'short_desc': 'A cor intensa do Flamboyant que resiste as mais s.',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['azul'],
		'likes': 30
	},
	{
		'name': 'Flamboyant',
		'short_desc': 'Representa a força do Ipe que tem seu melhor momento ao.',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['verde'],
		'likes': 11
	},
	{
		'name': 'Maca Verde',
		'short_desc': 'A maca verde eh a fruta de cor verde.',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['verde'],
		'likes': 3
	},	
	{
		'name': 'Uva Passa',
		'short_desc': 'Tudo passa ate uva passa',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Preta'],
		'likes': 3
	},	
	{
		'name': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Vermelho', 'Verde'],
		'likes': 3
	},	
	{
		'name': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Vermelho', 'Verde'],
		'likes': 3
	},	
	{
		'name': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Vermelho', 'Verde'],
		'likes': 3
	},	
	{
		'name': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Vermelho', 'Verde'],
		'likes': 3
	},	
	{
		'name': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Vermelho', 'Verde'],
		'likes': 3
	},	
	{
		'name': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Vermelho', 'Verde'],
		'likes': 3
	},	
	{
		'name': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
		'images': {
			'full': 'Inexistent this moment...',
			'thumb': '../images/sample/300x300.gif'
		},
		'color:': ['Vermelho', 'Verde'],
		'likes': 3
	},
	];
/* AngularJS Handling scop */
var app = angular.module("store", ['angularUtils.directives.dirPagination']);

app.controller("storeController", function($scope) {
	$scope.navBarMenus = menus;
	$scope.catalog = products;
	$scope.productShow = productShow;
	$scope.listStars = listStars;
	$scope.setImage = setImage;
});

app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider
    	.setPath('../bower_components/angular-utils-pagination/dirPagination.tpl.html');
});

/* function for Controller */

function productShow(pid) {
	$("#product-modal-lg-" + pid).modal();
};

function listStars(stars) {
	// returns class complement for starts from customer Review
	var default_size = 5;
	var lack = default_size - stars;
	var stars_class = [];
	for (i = 0; i < stars; ++i) {
		stars_class.push('active');
	};
	for (i = 0; i < lack; ++i) {
		stars_class.push('empty');
	};	

	//alert(stars_class);
	return stars_class;
};

function setImage(pid, imageUrl) {
	// disable removing .active
	$('.product-thumb-selected').each(function() {
		$(this).removeClass('active');
	});
	// active to compare mainImg with img.full in the template
	this.mainImg = imageUrl;

	var elemImgMain = $('#productIDforImg-' + pid);
	elemImgMain
		.fadeOut('fast')
		.fadeIn('fast', function(){
			elemImgMain.attr('src', imageUrl);		
		});
};

/* Data source */

var menus = ['Brinquedos', 'Livros', 'Roupas', 'Calçados', 'Enxoval', 
			'Tutoria & Cursos', 'Moldes'];
var products = [
	{
		'pid': 1,
		'title': 'Boneca Lelleca Flôr do Cerrado',
		'title_unicode': 'Flor do Cerrado',
	 	'short_desc': 'Antes de saber que Paul McCartney iria',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',
		'images': [],
		'color:': 'vermelho',
	 	'likes': 25,
	 	'price': 45.91,
	 	'costFree': false,
	 	'stars': 3,
	 	'freeShipping': true,
	 	'customer_commit': 2,
	},
	{
		'pid': 2,
		'title': 'Ipê Amarelo',
		'short_desc': 'Então minha tia chegou com a notícia',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},									
		],
		'color:': ['azul'],
		'likes': 30,
		'price': 32.45,
		'costFree': false,
		'stars': 4,
		'freeShipping': false,
		'customer_commit': 3,
	},
	{	
		'pid': 3,
		'title': 'Flamboyant',
		'short_desc': 'Aí tive a ideia de botar a mão na massa',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},									
		],
		'color:': ['verde'],
		'likes': 11,
		'price': 45.00,
		'costFree': false,
		'stars': 3,
		'freeShipping': false,
		'customer_commit': 3,
	},
	{
		'pid': 4,
		'title': 'Maça Verde',
		'short_desc': 'Deu certo. Ele arrecadou em torno de R$ 800',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},									
		],
		'color:': ['verde'],
		'likes': 3,
		'price': 45.00,
		'costFree': false,
		'stars': 5,
		'freeShipping': false,
		'customer_commit': 9,
	},	
	{
		'pid': 5,
		'title': 'Uva Passa',
		'short_desc': 'Tudo passa ate uva passa',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},										
		],
		'color:': ['Preta'],
		'likes': 3,
		'price': 45.00,
		'stars': 2,
		'freeShipping': false,
		'customer_commit': 1,
	},	
	{
		'pid': 6,
		'title': 'Melancia Garota',
		'short_desc': 'Desde de Carminda Miranda para aparecer basta uma fruta',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},										
		],
		'color:': ['Vermelho', 'Verde'],
		'likes': 3,
		'price': 45.00,
		'stars': 0,
		'freeShipping': false,
		'customer_commit': 4,
	},	
	{
		'pid': 7,
		'title': 'Manga Rosa',
		'short_desc': 'As pulseiras de plástico foram vendidas por R$ 4 cada',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},									
		],
		'color:': ['Vermelho', 'Verde'],
		'likes': 3,
		'price': 45.00,
		'stars': 0,
		'freeShipping': false,
		'customer_commit': 3,
	},	
	{
		'pid': 8,
		'title': 'Pessego Garota',
		'short_desc': 'Uma pessoa que queria nos dar os dois convites ',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},										
		],
		'color:': ['Vermelho', 'Verde'],
		'likes': 3,
		'price': 45.00,
		'stars': 5,
		'freeShipping': false,
		'customer_commit': 2,
	},	
	{
		'pid': 9,
		'title': 'Bruta Garota',
		'short_desc': 'Durante a semana, por causa das provas e lições',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},									
		],
		'color:': ['Vermelho', 'Verde'],
		'likes': 3,
		'price': 45.00,
		'stars': 5,
		'freeShipping': false,
		'customer_commit': 3,
	},	
	{
		'pid': 10,
		'title': 'Melancia Garota',
		'short_desc': 'Desde de Carmem Miranda para aparecer basta uma fruta',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},									
		],
		'color:': ['Vermelho', 'Verde'],
		'likes': 3,
		'price': 45.00,
		'stars': 5,
		'freeShipping': false,
		'customer_commit': 4,
	},	
	{
		'pid': 11,
		'title': 'Eita Gota',
		'short_desc': 'A produção acontece no final de semana',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},										
		],
		'color:': ['Vermelho', 'Verde'],
		'likes': 3,
		'price': 45.00,
		'stars': 2,
		'freeShipping': false,
		'customer_commit': 2,
	},	
	{
		'pid': 12,
		'title': 'Melancia Garota',
		'short_desc': 'O show de McCartney será a primeira atração',
	 	'description': 'Vestido branco de princesa com detalhes de rosas \
	 	 bordadas. Produzido com renda renascença. Bordado em pérolas. Renda \
	 	 clássica. Forro de algodão com manguinha. Saia de organza branca \
	 	 plissada. Tule por baixo. Nossos produtos são produzidos à mão, \
	 	 como se fossem feito especialmente para cada criança, com material \
	 	 de excelente qualidade e ótimo acabamento.',		
		'images': [
			{
			    'full': '../images/sample/300x300.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_1.gif',
			    'thumb': '../images/sample/thumb_75x75_1.gif'

			},
			{
			    'full': '../images/sample/300x300_2.gif',
			    'thumb': '../images/sample/thumb_75x75_2.gif'

			},
			{
			    'full': '../images/sample/300x300_3.gif',
			    'thumb': '../images/sample/thumb_75x75_3.gif'

			},
			{
			    'full': '../images/sample/300x300_4.gif',
			    'thumb': '../images/sample/thumb_75x75_4.gif'

			},										
		],
		'color:': ['Vermelho', 'Verde'],
		'likes': 3,
		'price': 45.00,
		'stars': 5,
		'freeShipping': false,
		'customer_commit': 10,
	},
	];
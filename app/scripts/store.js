/* AngularJS Handling scop */
var app = angular.module("store", ['angularUtils.directives.dirPagination']);

app.controller("storeController", function($scope) {
	$scope.navBarMenus = menus;
	$scope.catalog = products;
	$scope.productShow = productShow; // It calls setImage as an init
	$scope.listStars = listStars;
	$scope.addItem = addItem;
	$scope.delItem = delItem;

	$scope.setImage = function (pid, imageUrl) {
		// disable the visualization in highlight to removing .active
		$('.product-thumb-selected').each(function() {
			$(this).removeClass('active');
		});
		// active highlight. To comparing mainImg with img.full in the template
		$scope.mainImg = imageUrl;
		// change src from mainImage and effects animation 
		var elemImgMain = $('#productIDforImg-' + pid);
		elemImgMain
			.fadeOut('fast')
			.fadeIn('fast', function(){
				elemImgMain.attr('src', imageUrl);		
			});
	};

});

app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider
    	.setPath('../bower_components/angular-utils-pagination/dirPagination.tpl.html');
});

/* function for Controller */

function productShow(pid, mainImg) {
	/* Open the modal with product details and calls setImage to set 
	default img.
	*/
	$("#product-modal-lg-" + pid).modal();
	setImage(pid, mainImg);
};

function listStars(stars) {
	/* Returns arrays to shows stars from customer Review.
	*/
	var default_size = 5;
	var lack = default_size - stars;
	var stars_class = [];
	for (i = 0; i < stars; ++i) {
		stars_class.push('active');
	};
	for (i = 0; i < lack; ++i) {
		stars_class.push('empty');
	};	

	return stars_class;
};

function setImage(pid, imageUrl) {
	/* Used only to initiate the default image in modal product details.
	The storeController also has a function with same name.
	*/
	
	// disable the visualization in highlight to removing .active
	$('.product-thumb-selected').each(function() {
		$(this).removeClass('active');
	});

	// change src from mainImage and effects animation 
	var elemImgMain = $('#productIDforImg-' + pid);
	elemImgMain
		.fadeOut('fast')
		.fadeIn('fast', function(){
			elemImgMain.attr('src', imageUrl);		
		});
};

function commitDays(product) {
	/* Quantity of days to ship the product 
	*/
	try {
		if (product.p.customer_commit_each_item) {
			product.commitDays = product.p.customer_commit * product.quantityItens;
		}		
	}
	catch(err) {
		console.log("The field customer_commit_each_item not defined");
	}
	
}
function addItem() {
	/* Add item before to send for basket */

	try {
		this.quantityItens += 1;
		commitDays(this);
	}
	catch(err) {
		this.quantityItens = 0;
	}
}

function delItem() {
	/* Delete item before to send for basket */
	try {
		if (this.quantityItens > 1) {
			this.quantityItens -= 1;
			commitDays(this);
		}
	}
	catch(err) {
		this.quantityItens = 1;
	}
}

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
		'customer_requirements': [
			{
				'size': true,
				'opts':['P', 'M', 'G']
			},
		], 	 	
		'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',
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
		'customer_commit_each_item': true,
		'customer_requirements': [
			{
				'size': true,
				'opts':['P', 'M', 'G']
			},
		], 
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
		'customer_commit_each_item': true,		
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
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
	 	'installments': 'em até 12x de R$ 18,25 ou a partir de 24x R$ 10,40 \
	 	com juros R$ 197,10 à vista (10% de desconto)',		
	},
	];
app.controller("storeController", function($scope, $http) {
	
	// Initialize the model variables
	$scope.catalog = products();
	$scope.productShow = productShow; // It calls setImage as an init
	$scope.listStars = listStars;
	$scope.addItem = addItem;
	$scope.delItem = delItem;
	// It's used to interchangeable "q" between (shop.html + header.html)
	$scope.myQuery = ''; 
	$scope.activatedSearch = true;

	// Define utility functions
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

	function products() {
		$http.get('models/products.json')
			.then(function(res) {
				$scope.catalog = res.data;
			});
		}


});

// TODO REMOVE CONFIG BECAUSE MOVED TO MAIN.JS

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

	var priceInit = this.p.price;

	try {
		this.quantityItens += 1;

		/***** below rules (coding repeated between add or del) *****/
		var itens = this.quantityItens; 
		// commit days
		commitDays(this);
		// update price
		this.price = setCurrentPrice(priceInit, itens)			
		// set slip bank price
		this.priceSlipBank = 
			setSlipBankValue(this.price, this.slipBankDiscount);		
		// set period value 
		this.installmentsValue = 
			setInstallmentsValue(this.quotaInitValue, itens);	
		//animate
		animatePrice();
	}
	catch(err) {
		this.quantityItens = 0;
	}
}

function delItem() {
	/* Delete item before to send for basket */
	var priceInit = this.p.price;

	try {
		if (this.quantityItens > 1) {
			this.quantityItens -= 1;

			/***** below rules (coding repeated between add or del) *****/
			var itens = this.quantityItens; 
			// commit days
			commitDays(this);
			// update price
			this.price = setCurrentPrice(priceInit, itens)			
			// set slip bank price
			this.priceSlipBank = 
				setSlipBankValue(this.price, this.slipBankDiscount);		
			// set period value 
			this.installmentsValue = 
				setInstallmentsValue(this.quotaInitValue, itens);	
			//animate
			animatePrice();
		}
	}
	catch(err) {
		this.quantityItens = 1;
	}
}

function setSlipBankValue(price, discount) {
	/* Calculates the value to pay by slip bank.
	
	:param price: the current value/price (float) of product
	:param discount: percent of discount as decimal, e.g 5, 10 or 20
	*/
	total = price - (price * (discount/100)); // discount is decimal
	return total;
}

function setInstallmentsValue(quotaInitValue, quantityItens) {
	/* Calculates the value of installments. 
	
	:param quotaInitValue: the fixed in quota value of installments of product
	:param quantityItens: variable value defined by user
	*/
	return quotaInitValue * quantityItens;
}

function setCurrentPrice(initPrice, quantityItens) {
	/* Calculates the price amount.

	:param initPrice: initial price fo product
	:param quantityItens: variable value defined by user
	*/
	return initPrice * quantityItens;
}

function animateFade(obj) {
	/* Animates an object jquery */
	obj
		.fadeOut('fast')
		.fadeIn('slow');
}

function animatePrice() {
	animateFade($('.priceUn'));
}
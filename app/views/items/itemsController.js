var app = angular.module("myApp",[])



app.controller("myCtrl", function($scope, $http, $location){
	$scope.names = [
	{product: "Item1", price: 10000.0, qty: 1, url: "moto.jpeg"},
	{product: "Item2", price: 25000, qty: 1, url:"laptop.jpeg"},
	{product: "Item3", price: 50, qty: 1, url:"moto.jpeg"}
	];

	
	$http.get("http://localhost:3000/items")
  	.then(function(response) {
  	//alert(response)
    	$scope.myData = response.data;
  	});
  	
  	
	$scope.cart = [];
	$http.get("http://localhost:3000/items")
			  	.then(function(response) {
			  	//alert(response)
			    	$scope.cart = response.data;
			    	for (var i=0;i< $scope.cart.length;i++){
			    		if($scope.cart[i].item.inCart == true){
			    			$scope.total += $scope.cart[i].item.price * $scope.cart[i].item.qty;
			    		}
			    	}
			  	});

	$scope.total = 0;
	$scope.addToCart2 = function(name, update_qty){
		//alert(JSON.stringify(name));
		if (name.item.inCart == false || update_qty) {
			name.item.inCart = true;
			if (update_qty != 0){
				$scope.total -= name.item.qty*name.item.price;
			}
			name.item.qty = name.item.qty+update_qty;
			name.id = name.item.id;
			//name._method = 'put'
			//alert(JSON.stringify(name));
			//$http.delete("");
			$http.defaults.headers.post["Content-Type"] = "text/plain";
			$scope.total += name.item.qty*name.item.price;
			
			$http.put('http://localhost:3000/putdata',JSON.stringify(name)).then(function(){
				//alert("hi1");
				$http.get("http://localhost:3000/items")
			  	.then(function(response) {
			  	//alert(response)
			    	$scope.cart = response.data;
			  	});
		  	

			});	
		}else{
			alert("Already in cart");
		}
		
	};
	$scope.addToCart = function(name) {
		//alert(name.product+" "+name.qty+" "+name.price);
		//alert(JSON.stringify(name));
		//name.controller= 'items';
		//name.action = 'update';
		
		//alert($scope.cart2);
		if($scope.cart.indexOf(name) == -1){
			//alert(name);
			$scope.cart.push(name);

			$scope.total += name.qty*name.price;
		}
		else {
			alert("Already in Cart!");
		}
	};
	$scope.removeFromCart = function(name){
		//alert(JSON.stringify($scope.cart));
		//$scope.cart.pop(name.id);
		name.item.inCart = false;
		name.id = name.item.id;
		
		//name._method = 'put'
		//alert(JSON.stringify(name));
		//$http.delete("");
		$http.defaults.headers.post["Content-Type"] = "text/plain";
		$scope.total -= name.item.qty*name.item.price;
		name.item.qty = 1;
		$http.put('http://localhost:3000/putdata',JSON.stringify(name)).then(function(){
			//alert("hi");
			$http.get("http://localhost:3000/items")
		  	.then(function(response) {
		  	//alert(response)
		    	$scope.cart = response.data;
		    	$http.get("http://localhost:3000/items")
			  	.then(function(response) {
			  	//alert(response)
			    	$scope.myData = response.data;
			  	});
		  	});
	  	

		});	
		
		//$scope.cart = $scope.cart.filter(function(el) { return el.id != name.id; }); 
		//$scope.total -= name.qty*name.price;
	};
	$scope.removeFromDB = function(name){
		$http.delete("http://localhost:3000/items/"+name.id+"");
	};
	$scope.addItem = function(){
		var data = {"item":{"qty":1,"inCart":true,"price":10001,"name":"Item10","url":"moto.jpeg"}}
		$http.post("http://localhost:3000/items", JSON.stringify(data));
	};

});

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
	$scope.total = 0;
	$scope.addToCart2 = function(name){
		alert(JSON.stringify(name));
		name.item.inCart = true;
		alert(JSON.stringify(name));
		$http.delete("http://localhost:3000/items/22");
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
		$scope.cart = $scope.cart.filter(function(el) { return el.id != name.id; }); 
		$scope.total -= name.qty*name.price;
	};
	$scope.removeFromDB = function(name){
		$http.delete("http://localhost:3000/items/"+name.id+"");
	};
	$scope.addItem = function(){
		var data = {"item":{"qty":1,"inCart":true,"price":10001,"name":"Item10","url":"moto.jpeg"}}
		$http.post("http://localhost:3000/items", JSON.stringify(data));
	};

});

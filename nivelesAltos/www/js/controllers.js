angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, $state){
	$scope.loginData = {};
	$scope.doLogin = function(){
		$state.go('app.inicio');
		/*
		if($scope.loginData.code === 'NivelesAltos'){
			$state.go('app.inicio');
		}
		*/
	}
})
.controller('CaracteristicasBaseCtrl', function($scope, $ionicNavBarDelegate) {
	$scope.goBack = function(){
		$ionicNavBarDelegate.back();
	}
})
.controller('HistoriasVidaCtrl', function($scope, $ionicNavBarDelegate) {
	$scope.abre=function(index){
		var Contenido=angular.element(document.querySelector("#hv_cont"+index));
		if(Contenido.css('display')=='block'){
			Contenido.css('display','none');
		}else{
			Contenido.css('display','block');
		}
	}
})
.controller('SecretosBaseCtrl', function($scope, $ionicNavBarDelegate) {
	$scope.goBack = function(){
		$ionicNavBarDelegate.back();
	}
	$scope.muestra=function(index){
		var Contenido=angular.element(document.querySelector("#nl_cont"+index));
		if(Contenido.css('display')=='block'){
			Contenido.css('display','none');
		}else{
			Contenido.css('display','block');
		}
	}
})
.controller('TermoCtrl', function($scope, $state) {
	var getTotal = function(){
		var a = parseInt($scope.data.artesania),
			e = parseInt($scope.data.enfoque),
			h = parseInt($scope.data.historia),
			r = parseInt($scope.data.rareza);
		$scope.total = (a + e + h + r)/ 4;
		console.log($scope.total);
	}
	$scope.gotoBuy = function(){
		$state.go('app.termometro');
	}
	$scope.gotoBuyInto = function(){
		$state.go('app.termometro_into');
	}
	$scope.data = {
		artesania: 0,
		enfoque: 0,
		historia: 0,
		rareza: 0
	};
	$scope.$watchCollection('data', function(newName, oldName){
		getTotal();
	});
})
.controller('TermoIntoCtrl', function($scope, $state) {
	var getTotal = function(){
		var a = parseInt($scope.data.tough),
			e = parseInt($scope.data.tiempo),
			h = parseInt($scope.data.especial),
			r = parseInt($scope.data.solucion);
		$scope.total = (a + e + h + r)/ 4;
		console.log($scope.total);
	}
	$scope.gotoBuy = function(){
		$state.go('app.termometro');
	}
	$scope.gotoBuyInto = function(){
		$state.go('app.termometro_into');
	}
	$scope.data = {
		tough: 0,
		tiempo: 0,
		especial: 0,
		solucion: 0
	};
	$scope.$watchCollection('data', function(newName, oldName){
		getTotal();
	});
})
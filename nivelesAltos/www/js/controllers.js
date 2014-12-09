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
.controller('NSECtrl', function($scope, $ionicNavBarDelegate, $ionicPopover){
	$ionicPopover.fromTemplateUrl('popoverAB', {
		scope: $scope,
	}).then(function(popover){
		$scope.popoverAB = popover;
	});
	$ionicPopover.fromTemplateUrl('popoverC', {
		scope: $scope,
	}).then(function(popover){
		$scope.popoverC = popover;
	});
	$ionicPopover.fromTemplateUrl('popoverCMin', {
		scope: $scope,
	}).then(function(popover){
		$scope.popoverCMin = popover;
	});
	$scope.openPopover = function($event, popover){
		var boton = angular.element(event.target);
		$scope[popover].boton = boton;
		$scope[popover].show($event);
		$scope[popover].boton.addClass('ion-minus-circled');
		$scope[popover].boton.removeClass('ion-plus-circled');
	}
	$scope.closePopover = function(popover){
		$scope[popover].hide();
	}
	$scope.$on('popover.hidden', function(){
		if($scope.popoverAB.boton){
			$scope.popoverAB.boton.removeClass('ion-minus-circled');
			$scope.popoverAB.boton.addClass('ion-plus-circled');
		}
		if($scope.popoverC.boton){
			$scope.popoverC.boton.removeClass('ion-minus-circled');
			$scope.popoverC.boton.addClass('ion-plus-circled');
		}
		if($scope.popoverCMin.boton){
			$scope.popoverCMin.boton.removeClass('ion-minus-circled');
			$scope.popoverCMin.boton.addClass('ion-plus-circled');
		}
	});
	$scope.$on('$destroy', function(){
		console.log('destroy');
		$scope.popoverAB.remove();
		$scope.popoverC.remove();
		$scope.popoverCMin.remove();
	});
})
.controller('CaracteristicasBaseCtrl', function($scope, $ionicNavBarDelegate) {
	$scope.goBack = function(){
		$ionicNavBarDelegate.back();
	}
	$scope.options = {
		animation: true,
		animationEasing: "easeOutQuart",
		showScale: true,
		responsive: true
	}
	$scope.chart0 = [
		{
			value: 60,
			label: "Estudió en el extranjero",
			color: "#da4418",
			highlight: "#ee3f0c"
		},
		{
			value: 40,
			label: "Estudió en México",
			color: "#e7c500",
			highlight: "#ffd900"
		}
	]
	$scope.chart2 = [
		{
			value: 23,
			label: "No tiene hijos",
			color: "#00c6d9",
			highlight: "#00e9ff"
		},
		{
			value: 77,
			label: "Tiene hijos",
			color: "#e7c500",
			highlight: "#ffd900"
		}
	]
	$scope.chart3 = [
		{
			value: 93,
			label: "Tiene casa propia",
			color: "#e7c500",
			highlight: "#ffd900"
		},
		{
			value: 7,
			label: "No tiene casa propia",
			color: "#da4418",
			highlight: "#ee3f0c"
		}
	]
	$scope.chart4 = [
		{
			value: 3,
			label: "No",
			color: "#00c6d9",
			highlight: "#00e9ff"
		},
		{
			value: 97,
			label: "Si",
			color: "#e7c500",
			highlight: "#ffd900"
		}
	];
	$scope.chart5 = [
		{
			value: 17,
			label: "No",
			color: "#00c6d9",
			highlight: "#00e9ff"
		},
		{
			value: 83,
			label: "Si",
			color: "#e7c500",
			highlight: "#ffd900"
		}
	];
	$scope.chart6 = {
		labels: ["Casa","Móvil","Trabajo","Internet Móvil","Wi-fi Gratis","Escuela"],
		datasets: [
			{
				fillColor: "#e7c500",
				strokeColor: "#999",
				highlightFill: "#ffd900",
				data:[92,86,77,55,21,6]
			}
		]
	}
	$scope.chart7 = {
		labels: ["Tarjeta","Plan","Plan/Tarjeta"],
		datasets: [
			{
				fillColor: "#e7c500",
				strokeColor: "#999",
				highlightFill: "#ffd900",
				data:[13,82,6]
			}
		]
	}
})
.controller('HistoriasVidaCtrl', function($scope, $ionicNavBarDelegate) {
	$scope.abre=function(index, event){
		var boton = angular.element(event.target);
		var Contenido=angular.element(document.querySelector("#hv_cont"+index));
		if(Contenido.css('display')=='block'){
			Contenido.css('display','none');
			boton.removeClass('ion-minus-circled');
			boton.addClass('ion-plus-circled');
		}else{
			Contenido.css('display','block');
			boton.removeClass('ion-plus-circled');
			boton.addClass('ion-minus-circled');
		}
	}
})
.controller('SecretosBaseCtrl', function($scope, $ionicNavBarDelegate) {
	$scope.goBack = function(){
		$ionicNavBarDelegate.back();
	}
	$scope.muestra=function(index){
		var boton = angular.element(event.target);
		var Contenido=angular.element(document.querySelector("#nl_cont"+index));
		if(Contenido.css('display')=='block'){
			Contenido.css('display','none');
			boton.removeClass('ion-minus-circled');
			boton.addClass('ion-plus-circled');
		}else{
			Contenido.css('display','block');
			boton.removeClass('ion-plus-circled');
			boton.addClass('ion-minus-circled');
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
angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, $state, $mdDialog){
	$scope.loginData = {};
	$scope.doLogin = function(){
		if($scope.loginData.code != null){
			var data = '{"iv":"akXmhXkbzuSI1goV6A/kbQ==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"w3lZz4lYxbI=","ct":"7Ww+czWegM0b9a9y5OYPdIxWCQ=="}';
			var code = sjcl.decrypt("NivelesAltos", data);
			if(code == $scope.loginData.code){
				$state.go('app.inicio');
			}else{
				$mdDialog.show(
					$mdDialog.alert()
					.title('Error')
					.content('El keycode introducido no es válido.')
			        .ariaLabel('Password notification')
			        .ok('Intentar nuevamente')
				);
			}
		}
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
			label: "No ve TV de paga",
			color: "#00c6d9",
			highlight: "#00e9ff"
		},
		{
			value: 97,
			label: "Si ve TV de paga",
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
		labels: ["Casa","Móvil","Trabajo","Internet Móvil","Wi-fi gratis","Escuela"],
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
		var secc1 = angular.element(document.querySelector(".historias_vida .col:nth-child(1)"));
		var secc2 = angular.element(document.querySelector(".historias_vida .col:nth-child(2)"));
		console.log(secc1, secc2);
		var contenido=angular.element(document.querySelector("#hv_cont"+index));
		if(contenido.css('display')=='block'){
			contenido.css('display','none');
			secc1.removeClass('col-10').addClass('col-33');
			secc2.removeClass('col-90').addClass('col-67');
			boton.removeClass('ion-minus-circled').addClass('ion-plus-circled');
		}else{
			contenido.css('display','block');
			secc1.removeClass('col-33').addClass('col-10');
			secc2.removeClass('col-67').addClass('col-90');
			boton.removeClass('ion-plus-circled').addClass('ion-minus-circled');
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
.controller('ActividadesCtrl', function($scope){
	$scope.options = {
		animation: true,
		animationEasing: "easeOutQuart",
		showScale: true,
		responsive: true,
		scaleShowLabels: false,
		tooltipFontSize: 12,
		maintainAspectRatio: true
	}
	$scope.chart = {
		labels: [
		"Compras",
		"Evento social",
		"Lugar de moda",
		"Festival de Música",
		"Check up anual",
		"Médico especializado",
		"Deporte extremo",
		"Festival de cine",
		"Inauguración de un hotel",
		"Evento deportivo",
		"Gala benéfica",
		"Compra de una casa/propiedad",
		"Ninguna de las anteriores"],
		datasets: [
			{
				fillColor: "#e7c500",
				strokeColor: "#999",
				highlightFill: "#ffd900",
				data:[82,55,42,37,19,17,17,15,14,14,13,10,4]
			}
		]
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
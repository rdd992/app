var app = angular.module('app',['ngRoute','ui.bootstrap']);

angular.module('app',['ngRoute']).config(function($routeProvider){
$routeProvider
.when("/",{ 
	templateUrl:'views/datosPersonales.html',
	controller:'controladorFormulario'
}).when("/productos/:edad",{ 
	templateUrl:'views/productos.html',
	controller:'controladorProductos'
}).otherwise({
redirectTo:'/'
});


});












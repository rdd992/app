angular.module('app').controller('controladorProductos',['$scope','$routeParams','$location',function($scope,$routeParams,$location){
$scope.rango1=false;
$scope.rango2=false;
$scope.rango3=false;
$scope.usuario = {
	nombre:'',
	edad:'',
	apellido:'',
	sexo:''
}
$scope.producto1 = {
	id:'',
	nombre:'',
	precio:'',
	cantidad:0
}
$scope.producto2 = {
	id2:'',
	nombre2:'',
	precio2:'',
	cantidad2:0
}

$scope.init = function(){
$scope.usuario.edad = $routeParams.edad
console.log($scope.usuario.edad)
if($scope.usuario.edad>0 && $scope.usuario.edad<=15){
			$scope.rango1=false;
			$scope.rango2=true;
			$scope.rango3=false;

			$scope.producto1 = {
				id:'1',
				nombre:'Frutilla',
				precio:'100',
				cantidad:0
								}
			$scope.producto2 = {
				id2:'2',
				nombre2:'Platano',
				precio2:'150',
				cantidad2:0
}
		};
if($scope.usuario.edad>=16 && $scope.usuario.edad<=25){
			$scope.rango1=false;
			$scope.rango2=true;
			$scope.rango3=false;

			$scope.producto1 = {
				id:'3',
				nombre:'Durazno',
				precio:'200',
				cantidad:0
								}
			$scope.producto2 = {
				i2:'4',
				nombre2:'Damasco',
				precio2:'300',
				cantidad2:0
			}

		};
	
	if($scope.usuario.edad>=26 && $scope.usuario.edad<=50){
			$scope.rango1=false;
			$scope.rango2=false;
			$scope.rango3=true;

			$scope.producto1 = {
				id:'5',
				nombre:'Sandia',
				precio:'500',
				cantidad:0
								}
			$scope.producto2 = {
				id2:'6',
				nombre2:'melón',
				precio2:'400',
				cantidad2:0
			}

};
	};

$scope.calcular = function(){

$scope.total=($scope.producto1.precio*$scope.producto1.cantidad)+($scope.producto2.precio2*$scope.producto2.cantidad2);
$scope.descuento=($scope.total*0.10);


};

$scope.limpiar=function(){
$scope.producto1.cantidad=0;
$scope.producto2.cantidad2=0;
$scope.total=0;
$scope.descuento=0;
};
$scope.volver = function(){
$location.path('/')
};

}]);

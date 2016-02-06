angular.module('app').controller('controladorFormulario',['$scope','$location',function($scope,$location){
$scope.usuario = {
	nombre:'',
	edad:'',
	apellido:'',
	sexo:''
}

$scope.sexo = {
    opciones:[
      {id: '2', nombre: 'Femenino'},
      {id: '3', nombre: 'Masculino'}
    ]
    };

$scope.validar = function(){

	if($scope.usuario.nombre===null || $scope.usuario.nombre==='' || $scope.usuario.nombre===undefined){
		alert('Debe ingresar su nombre');
		return;
	}
	if($scope.usuario.apellido===null || $scope.usuario.apellido==='' || $scope.usuario.apellido===undefined){
	alert('Debe ingresar su apellido');
	return;
	}
	if($scope.usuario.edad===null || $scope.usuario.edad==='' || $scope.usuario.edad===undefined){
		alert('Debe ingresar su edad');
		return;
	}
		
	if($scope.usuario.sexo.id===null || $scope.usuario.sexo.id==='' || $scope.usuario.sexo.id===undefined){
		alert('Debe Seleccionar una opción');
		return;
	}
	$location.path("/productos/"+$scope.usuario.edad);
};

}]);


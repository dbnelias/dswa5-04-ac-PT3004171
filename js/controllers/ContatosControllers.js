angular.module('ifsp'), controller('ContatosController', function($scope){
	$scope.total = 0;
	$scope.incrementa = function() {
		$scope.total++;
	};
	
	$scope.contatos = [
	{"_id": 1, "nome": "Daniela Elias", "email": "daniela.barbosa@aluno.ifsp.edu.br"}
	];
	
	$scope.filtro = '';
});
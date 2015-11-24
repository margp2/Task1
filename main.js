var app= angular.module('Todo', []);
APP.CONTROLLER('TodoCtr;', function($scope) {
 	 $scope.todos = [
    'Get the car fixed', 
    'Grocery Shopping',
	];
	
	$scope.done = function(todo) {
		var indexOf = $scope.todos.indesOf(todo);
		if (indexOf != -1) {
		$scope.todos.splice(indesOf,1);
		}
	};
	} );

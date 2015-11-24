var app= angular.module('Todo', []);
APP.CONTROLLER('TodoCtr;', function($scope) {
 	 $scope.todos = [
    'Learn Sketch', 
    'Look at Dribbble and feel inferior',
    'Actually learn how to use the Pen tool'
	];
	
	$scope.done = function(todo) {
		var indexOf = $scope.todos.indesOf(todo);
		if (indexOf != -1) {
		$scope.todos.splice(indesOf,1);
		}
	};
	} );

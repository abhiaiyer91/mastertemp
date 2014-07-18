'use strict';
 
app.factory('Post', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'comments');
 	// Get the Firebase reference of the item
    var comments = $firebase(ref);

	 var Post = {
	    all: comments,
	    create: function (comment) {
	      return comments.$add(comment);
	    },
	    find: function (commentId) {
	      return comments.$child(commentId);
	    },
	    delete: function (commentId) {
	      return comments.$remove(commentId);
	    },
	    update: function (commentId){
	    	return comments.$save(commentId);
	    }
	  };
	 
	  return Post;


});


// todomvc.controller('TodoCtrl', function TodoCtrl($scope, $location, $firebase) {
// 	$scope.$watch('todos', function () {
// 		var total = 0;
// 		var remaining = 0;
// 		$scope.todos.$getIndex().forEach(function (index) {
// 			var todo = $scope.todos[index];
// 			// Skip invalid entries so they don't break the entire app.
// 			if (!todo || !todo.title) {
// 				return;
// 			}

// 			total++;
// 			if (todo.completed === false) {
// 				remaining++;
// 			}
// 		});
// 		$scope.totalCount = total;
// 		$scope.remainingCount = remaining;
// 		$scope.completedCount = total - remaining;
// 		$scope.allChecked = remaining === 0;
// 	}, true);





// 	$scope.doneEditing = function (id) {
// 		$scope.editedTodo = null;
// 		var title = $scope.todos[id].title.trim();
// 		if (title) {
// 			$scope.todos.$save(id);
// 		} else {
// 			$scope.removeTodo(id);
// 		}
// 	};

// 	$scope.revertEditing = function (id) {
// 		$scope.todos[id] = $scope.originalTodo;
// 		$scope.doneEditing(id);
// 	};

// 	$scope.removeTodo = function (id) {
// 		$scope.todos.$remove(id);
// 	};

// 	$scope.toggleCompleted = function (id) {
// 		var todo = $scope.todos[id];
// 		todo.completed = !todo.completed;
// 		$scope.todos.$save(id);
// 	};

// 	$scope.clearCompletedTodos = function () {
// 		angular.forEach($scope.todos.$getIndex(), function (index) {
// 			if ($scope.todos[index].completed) {
// 				$scope.todos.$remove(index);
// 			}
// 		});
// 	};

// 	$scope.markAll = function (allCompleted) {
// 		angular.forEach($scope.todos.$getIndex(), function (index) {
// 			$scope.todos[index].completed = !allCompleted;
// 		});
// 		$scope.todos.$save();
// 	};

// 	$scope.newTodo = '';
// 	$scope.editedTodo = null;

// 	if ($location.path() === '') {
// 		$location.path('/');
// 	}
// 	$scope.location = $location;

// 	// Bind the todos to the firebase provider.
// 	$scope.todos = $firebase(fireRef);
// });
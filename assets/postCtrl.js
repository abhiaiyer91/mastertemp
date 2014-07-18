'use strict';

window.app.controller('postCtrl', ['$scope', 'Post', function($scope, Post){

	$scope.comments = Post.all;

	$scope.viewpost = [];

	$scope.comment = {text: '', id: $scope.id, name: '', date: new Date()};

	$scope.addComment = function (){
		Post.create($scope.comment).then(function (){
			$scope.commview = true;
		});
		$scope.displayText = $scope.comment.text;
		$scope.comment.text = '';
		$scope.viewpost.push($scope.comment);

	};

	$scope.editComment = function (commentId) {
		$scope.editedComment = $scope.comments[commentId];
		$scope.originalComment = angular.extend({}, $scope.editedComment);
	};



	
}])

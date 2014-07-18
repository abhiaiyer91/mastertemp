'use strict';

window.app.controller('MakeTestCtrl', ['$scope','$rootScope','Test', 
	function ($scope, $rootScope, Test) {
		
		$scope.questions = Test.all;
		$scope.editing = false;

		$scope.quest = {'question':'','img':'','answers':[{'ans':'','correct':''},{'ans':'','correct':''},{'ans':'','correct':''},{'ans':'','correct':''}]};
		$scope.ques = $scope.quest;

		$scope.remove = function (id) {
			Test.delete(id);
		};

		$scope.edit = function(id) {
			$scope.ques = Test.find(id);
			$scope.editing = true;
		}

		$scope.finalize = function () {
			Test.edit($scope.ques);
		};

		$scope.cancel = function () {
			$scope.editing = false;
			$scope.ques = $scope.quest;
		};

		$scope.addQuestion = function () {
			Test.create($scope.ques);
			$scope.ques = $scope.quest;
		};
		
	}]);
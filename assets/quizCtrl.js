'use strict';

window.app.controller('QuizCtrl', ['$scope','$rootScope','Test',
	function ($scope, $rootScope, Test) {

		$scope.testbank = Test.all;
		$scope.resp = "Good Luck!!";
		$scope.playMes = false;
		$scope.getBool = false;
		$scope.score = 0;
		$scope.count = 0;
		$scope.attempts = 0;
		$scope.answerImage = false;
		
		$scope.keepScore = function (correct) {
			$scope.answerImage = true;
			$scope.attempts++;
			if (correct) {
				$scope.resp = "You Got It!";
				$scope.score++;
			}
			else {
				$scope.resp = "Do You Even Watch Football?";
			}
			$scope.getBool = !$scope.getBool;
			
			if ($scope.attempts == 5) {
				if ($scope.score == $scope.attempts)
					$scope.resp = "YOU WIN! You got " + $scope.getAverage();
				else
					$scope.resp = "Game Over! You got " + $scope.getAverage();
				$scope.playMes = true;
			}
		};
		
		$scope.getScore = function () {
			return $scope.score*100;
		};

		$scope.getAverage = function () {
			if ($scope.attempts == 0)
				return '0%';
			return Math.round(100*($scope.score / $scope.attempts)) + '%';
		};
		
		$scope.whatAttempt = function (id) {
			return id === $scope.count ? true : false;
		};

		$scope.next = function () {
			$scope.answerImage = false;
			$scope.count++;
		}
		
		$scope.reset = function () {
			$scope.attempts = 0;
			$scope.score = 0;
			$scope.count = 0;
			$scope.playMes = false;
			$scope.getBool = false;
			$scope.answerImage = false;
			$scope.resp = "Good Luck!!";
		};
}]);
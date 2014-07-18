'use strict';

window.app.controller('FanCtrl', ['$scope', 'instaSrvc', function ($scope, instaSrvc) {
	$scope.search = function (str) {
		
		var string = str + 'fans';
		
		instaSrvc(string).then(function (data) {
			$scope.fans = data;
		});
	};

	$scope.fans = [];
}]);
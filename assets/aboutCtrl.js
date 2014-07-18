'use strict';

window.app.controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
		url:'//cdn.shopify.com/s/files/1/0515/6109/t/2/assets/about.json',
		method:'GET'
	}).success(function (data) {
		$scope.images = data;
	});
	$scope.images = [];
}]);
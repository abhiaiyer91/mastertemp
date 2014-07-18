'use strict';

window.app.factory('instaSrvc', ['$http', '$q', function ($http, $q) {

	return function (str) {
		var url = 'https://api.instagram.com/v1/tags/' + str + '/media/recent';

		var request = {
			callback: 'JSON_CALLBACK',
			client_id: 'd4189914663e49f1b3224d9a3ef7482d'
		};

		var defer = $q.defer();

		$http({
			method: 'JSONP',
			url: url,
			params: request
		}).
		success(function(result) {
			defer.resolve(result.data);
		}).
		error(function() {
			console.log('Could not connect to Instagram');
		});

		return defer.promise;
	};
}]);

window.app.controller('InstaCtrl',['$scope','instaSrvc', function ($scope, instaSrvc) {

	$scope.search = function (str) {
		instaSrvc(str).then(function (data) {
			$scope.instas = data;
			console.log(data);
		});
	};

	$scope.instas = [];
	$scope.ajaxComplete = false;
	
}]);
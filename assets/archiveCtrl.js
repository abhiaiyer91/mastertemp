'use strict';

window.app.controller('ArchiveCtrl', ['$scope', function ($scope) {

	$scope.months = [
		{name:'January',size:0},
		{name:'February',size:0},
		{name:'March',size:0},
		{name:'April',size:0},
		{name:'May',size:0},
		{name:'June',size:0},
		{name:'July',size:0},
		{name:'August',size:0},
		{name:'September',size:0},
		{name:'October',size:0},
		{name:'November',size:0},
		{name:'December',size:0}
	];

	$scope.add = function (month) {
		$scope.months.forEach(function (mon) {
			if (mon.name == month) {
				mon.size++;
				return;
			}		
		});
	};

}]);
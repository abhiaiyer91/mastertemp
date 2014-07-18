'use strict';

window.app.controller('MainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.athleteName  = 'Lebron James';
    $rootScope.athleteNum  = '6';
    $rootScope.athleteAbrev = 'LBJ6';

	$rootScope.facebookUrl  = 'https://www.facebook.com/LeBron';
	$rootScope.twitterUrl   = 'https://twitter.com/KingJames';
	$rootScope.instagramUrl = 'http://instagram.com/kingjames';

}]);
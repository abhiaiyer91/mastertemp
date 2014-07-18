'use strict';

window.app.controller('SocialCtrl', ['$scope', function ($scope) {
	
	$scope.addSocials = function (str) {
		var social = {link:'',abbr:'',site:''};

		social.link = str;
		if(str.indexOf('facebook') != -1) {social.abbr = '/'+cut(str);social.site = 'facebook-square';}
		if(str.indexOf('twitter') != -1)  {social.abbr = '@'+cut(str);social.site = 'twitter-square';}
		if(str.indexOf('instagram') != -1){social.abbr = '@'+cut(str);social.site = 'instagram';}

		$scope.socials.push(social);	
	};

	$scope.column = function () {
		return 12 / $scope.socials.length;
	};

	var cut = function (str) {
		var i = str.lastIndexOf('/');
		return str.slice(i+1);
	};

	$scope.socials = [];

}]);
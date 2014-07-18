(function(window){
	'use strict';
	window.app = angular.module('Athlete', ['ngResource', 'firebase', 'ui.bootstrap', 'ngAnimate']);
	var athlete = 'RS25/';
	window.app.constant('FIREBASE_URL', 'https://mvpanthro.firebaseio.com/' + athlete);
	window.app.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
  });

}(window));

window.app.directive('slider', function(){
	// Runs during compile
	return {
		link: function($scope, elm, attrs) {
			elm.revolution(
			  {
			  delay:9000,
			  startwidth:1170,
			  startheight:550,
			  onHoverStop:"on",
			  navigationType:"none",
			  soloArrowLeftHOffset:0,
			  soloArrowLeftVOffset:0,
			  soloArrowRightHOffset:0,
			  soloArrowRightVOffset:0,
			  touchenabled:"on",
			  fullWidth:"on",
			  shadow:0
			  });
		}
	};
});
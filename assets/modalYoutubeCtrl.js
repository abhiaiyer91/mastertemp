'use strict';

window.app.controller('ModalYoutubeCtrl', ['$scope', '$modal', function ($scope, $modal) {
	$scope.open = function (source) {
		var modalInstance = $modal.open({
			templateUrl: 'YoutubeContent.html',
			controller: ModalYoutubeInstanceCtrl,
			resolve: {
		        source: function () {
		          console.log(source);
		          return source;
		        }
		    }
		});
	};
	
}]);

var ModalYoutubeInstanceCtrl = function ($scope, $modalInstance, $sce, source) {

  $scope.source = source;

  $scope.trustSrc = function() {
    return $sce.trustAsResourceUrl('//www.youtube.com/embed/' + $scope.source + '?rel=0&autoplay=1');
  }

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
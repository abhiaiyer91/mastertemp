
'use strict';

window.app.controller('MediaCtrl', ['$scope', 'MediaAlbum', function($scope, MediaAlbum){
	$scope.images = MediaAlbum.album;
}]);
window.app.controller('vimeoCtrl', ['$scope', 'vimeoService', '$sce',
           function ($scope, vimeoService, $sce) {

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl('http://player.vimeo.com/video/'+ src);
  }

             function successHandler(data){
               $scope.data = data;
               console.log($scope.data);

               if($scope.data === undefined)
                   return;
             }

             function errorHandler(err){
               $scope.error = true;
             }

            vimeoService.cachedVideos().then(successHandler, errorHandler);

  }]);

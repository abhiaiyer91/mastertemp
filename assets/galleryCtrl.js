window.app.controller('galleryCtrl', ['$scope', 'galleryService', '$rootScope', function($scope, galleryService, $rootScope){
  		$scope.select = function (){
  			console.log($scope.slides);
        $rootScope.showz = true;
        $rootScope.sign = true;
  		}

}]);

window.app.controller('ModalCtrl', function ($scope, $modal){
    $scope.open = function (_slide) {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        slide: function () {
          return _slide;
        }
      }
    });
  };
});

var ModalInstanceCtrl = function ($scope, $modalInstance, slide) {
  $scope.selected = slide;
  $scope.id = $scope.selected.$$hashKey;
  $scope.commview = false;
  $scope.album = 'Test Album';
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  $scope.click = function (){
     console.log('hello');
  };
};

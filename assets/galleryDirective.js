window.app.directive('gallery', ['galleryService', function (galleryService)
    {
        return {
            restrict: 'A',
            controller: 'ModalCtrl',
            template:
                '<div id="photos">'+
                '<div ng-repeat="slide in slides">' +
                '<a href="#" ng-click="open(slide);select();">' +
                '<img ng-src="{{slide.image}}" alt="" class="img-responsive">'+
                '</a>' +
                '</div>'+
                '</div>'

                    ,



            link: function (scope, element, attrs)
            {

                // defaults
                scope.src = attrs.src;


                var render = function (photos)
                {
                    scope.slides = photos;
                }

                if (galleryService.hasPhotos())
                {
                    // show cached photos
                    render(galleryService.photos);
                }
                else
                {
                    // download photos
                    galleryService.query(scope.src)
                    .then(function (photos)
                    {
                        render(photos);
                        console.log(photos);
                    });
                }
            }
        }
    }]
       );

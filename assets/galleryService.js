'use strict';

// window.app.factory('galleryService', ['$http', '$q', function ($http, $q){
//
// 	var d = {};
// 	d.query = function (src){
// 		var deferred = $q.defer();
// 		if(d.photos){
// 			deferred.resolve(d.photos);
// 		} else {
// 			$http.jsonp('http://www.flickr.com/services/feeds/' + src + '&lang=en-us&format=json&jsoncallback=JSON_CALLBACK',{
// 				cache: true
// 			})
// 			.success(function (result){
// 				d.photos = result.items;
//
// 				angular.forEach(d.photos, function(p){
// 					p.image = p.media.m.replace('_m', '_z');
// 				});
//
// 				deferred.resolve(d.photos);
// 			})
// 			.error(function (){
// 				deferred.reject('Could not retrieve photos');
// 			});
// 		}
// 		return deferred.promise;
// 	}
//
// 	d.hasPhotos = function () {
// 		return !!d.photos;
// 	}
//
// 	return d;
// }]);

window.app.factory('galleryService', ["$http", "$q", function ($http, $q)
    {
        var o = {};

        o.query = function (src)
        {
            var deferred = $q.defer();

            // return if already have photos

            if (o.photos)
            {
                deferred.resolve(o.photos);
            }
            else
            {
                $http.jsonp('http://www.flickr.com/services/feeds/' + src + '&lang=en-us&format=json&jsoncallback=JSON_CALLBACK',
                {
                    cache: true
                })
                .success(function (result)
                {
                    o.photos = result.items;

                    angular.forEach(o.photos, function (p)
                    {
                        // change to large format
                        p.image = p.media.m.replace('_m', '_z');
                    });

                    deferred.resolve(o.photos);

                })
                .error(function ()
                {
                    deferred.reject('Could not retrieve json');
                });
            }

            return deferred.promise;
        }

        o.hasPhotos = function ()
        {
            return !!o.photos;
        }

        return o;
    }]);

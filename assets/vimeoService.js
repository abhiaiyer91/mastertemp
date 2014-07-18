'use strict';
window.app.factory('vimeoService',function($http,$q){
  return {
    cachedVideos: function(){
      var q = $q.defer();
      var endpoint = 'http://vimeo.com/api/v2/group/athlete/videos.json';

        $http({
          method: 'GET',
          url: endpoint,
          cache: true
        }).success(function(response){
        	
            q.resolve(response);
            })
        .error(function(response){
        	q.reject(response);
        })
          return q.promise;
      }
    }
  });
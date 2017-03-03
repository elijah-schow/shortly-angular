angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: $scope.link
    })
    .then(function (resp) {
      return resp;
    });
  };
});

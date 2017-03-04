angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location, Links) {
  $scope.link = {};
  $scope.error = '';

  $scope.addLink = function(isValid) {
    if (isValid) {
      $scope.error = '';
      return $http({
        method: 'POST',
        url: '/api/links',
        data: $scope.link
      })
      .then(function (resp) {
        return resp;
      })
      .catch(resp => {
        $scope.error = resp.data.error;
      });
    } else {
      $scope.error = 'URL is invalid';
    }
  };
});

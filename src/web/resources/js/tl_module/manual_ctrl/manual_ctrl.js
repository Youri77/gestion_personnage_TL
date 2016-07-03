// Formulaire de Traitre-Lame
"use strict";

characterApp.controller("manual_ctrl", ["$scope", "$q", "$http", "$window", /*"$timeout",*/ function ($scope, $q, $http, $window) {
  $scope.manual = null;

  $scope.formatMenuNavHtml = function (title) {
    return title + " <b class=\"caret\" />";
  };

  $scope.formatAnchor = function (title) {
    if (isUndefined(title)) {
      return "";
    }
    return title.replace(/\s+/g, '');
  };

  $http.get("/cmd/rule").success(
    function (data/*, status, headers, config*/) {
      $scope.manual = data.manual;
    }
  );

}]);

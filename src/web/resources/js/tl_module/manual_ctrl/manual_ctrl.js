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

  $scope.getTitleHtml = function (obj) {
    if ("title_html" in obj) {
      return obj["title_html"];
    }
    return obj["title"];
  };

  $scope.formatHtmlDescription = function (desc) {
    // format html from string or array
    var response;
    if (Object.prototype.toString.call(desc) === '[object Array]') {
      // each item from string is a paragraph
      response = "";

      var arrayLength = desc.length;
      for (var i = 0; i < arrayLength; i++) {
        var desc_item = desc[i];
        if (typeof desc_item === 'string') {
          response += "<p>" + desc_item + "</p>";
        } else if (Object.prototype.toString.call(desc_item) === '[object Array]') {
          // each array in array is bullet list
          var arrayLength_2 = desc_item.length;
          response += "<ul>";
          for (var j = 0; j < arrayLength_2; j++) {
            response += "<li>" + desc_item[j] + "</li>";
          }
          response += "</ul>";
        }
      }
    } else {
      response = desc;
    }
    return response;
  };

  $http.get("/cmd/rule").success(
    function (data/*, status, headers, config*/) {
      $scope.manual = data.manual;
    }
  );

}]);

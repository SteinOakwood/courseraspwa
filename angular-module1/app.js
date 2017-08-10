(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchmenuitems = "";
  $scope.lunchmenumessageresult = "";

  $scope.checkIfTooMuch = function () {

    var arrayOfStrings = $scope.lunchmenuitems.split(',');

    for (var i=0 ; i<arrayOfStrings.length ; i++) {
      console.log('arrayOfStrings[' + i + '] = ' + arrayOfStrings[i]);
    }

    if (arrayOfStrings.length == 1) {
      if (arrayOfStrings[0] == '') {
        $scope.lunchmenumessageresult = "Please enter data first";
      } else {
        $scope.lunchmenumessageresult = "Enjoy!";
      }
    } else if (arrayOfStrings.length < 4) {
      $scope.lunchmenumessageresult = "Enjoy!";
    } else {
      $scope.lunchmenumessageresult = "Too much!";
    }

  }

}

})();

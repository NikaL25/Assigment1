(function() {
'use strict';

angular.module('appModule1', [])

    .controller('appControllerModule1', function($scope) {
        
        $scope.name = [];
        $scope.message = '';
        $scope.classChecker = null;
        $scope.whiteSpaceChecker = false;

        $scope.getItems = function() {
            if (!$scope.name || !$scope.name.length) {
                $scope.message = 'Please enter data first.';
                $scope.classChecker = false;
            } else {
                var tempTotal = $scope.name.split(',');
                $scope.classChecker = true;
                    if (tempTotal.length > 3) {
                        $scope.message = 'Too much!';
                    } else {
                        $scope.message = 'Enjoy';
                    }
            }
        }
    });

})();
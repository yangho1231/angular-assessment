angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams) {
   
        mainService.getShopData().then(function(response) {
            console.log("mainCtrl", response);
            $scope.datas = response;
        })
        console.log("StateParams", $stateParams.id);
        $scope.getId = mainService.getId($stateParams.id).then(function(response) {
            $scope.individual = response;
        })
    })
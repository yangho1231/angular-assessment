angular.module('assessment').service('mainService', function($http) {
this.getShopData = function() {
    return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response) {
        console.log(response);
        return response.data;
    })
    }
    this.getId = function(id) {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/' + id
        }).then(function(response) {
            console.log("id", id);
            console.log(response.data);
            return response.data;
        })
    }
});
var myApp = angular.module("myApp", []);

myApp.controller("BasicController", ["$scope", "$http", function($scope, $http){
    $scope.message = "Hello Luke";
    $scope.lizardData = [];

    $scope.deleteLizard = function(lizard){
      console.log("DELETING", lizard);
      $http.delete("/lizards/" + lizard._id).then(function(response){
          $scope.getLizard();
      });
    };

    $scope.postLizard = function(){
      var data = {
        name: $scope.name,
        color: $scope.color,
        size: $scope.size
      };
      $http.post("/lizards/add", data).then(function(response){
        $scope.getLizard();
      });
    };

    $scope.getLizard = function(){
      $http.get("/lizards").then(function(response){
        $scope.lizardData = response.data;
      });
    };

    $scope.getLizard();
}]);

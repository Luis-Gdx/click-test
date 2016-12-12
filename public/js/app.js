app = angular.module("app", ["app.directives"]);
app.controller("mainCtrl", function($scope) {
    $scope.btn = [];
    $scope.newBtn = {};
    var id = 1;
    $scope.add = function() {
        $scope.newBtn.id = id;
        $scope.newBtn.x = 0;
        $scope.newBtn.y = 0;
        $scope.btn.push($scope.newBtn);
        $scope.newBtn = {}
        id++;
    }
    $scope.position = function(id) {
        $scope.newBtn.x = $("#c" + id).css("left");
        $scope.newBtn.y = $("#c" + id).css("top");
        $scope.newBtn.id = id;
        //$scope.btn.splice(id - 1, 0, $scope.newBtn);
        //$scope.newBtn = {};
        console.log($scope.btn);
        //console.log("Input " + id + ": x = " + $scope.newBtn.x + " y = " + $scope.newBtn.y);
    }
    $scope.calc = function() {
        for (var i = 0; i < $scope.btn.length; i++) {
            console.log($scope.btn);
        }
    }
});
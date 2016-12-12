app = angular.module("app", ["app.directives"]);
app.controller("mainCtrl", function($scope) {
    $scope.btn = [];
    $scope.newBtn = {};
    $scope.add = function() {
        //$scope.newBtn.id = id;
        /*$scope.newBtn.x = 0;
        $scope.newBtn.y = 0;*/
        $scope.btn.push($scope.newBtn);
        $scope.newBtn = {}
    }
    $scope.position = function() {
        for (var i = 0; i < $scope.btn.length; i++) {
            $scope.newBtn.x = $("#c" + i).css("left");
            $scope.newBtn.y = $("#c" + i).css("top");
            $scope.btn[i] = $scope.newBtn;
            $scope.newBtn = {};
        }
        console.log($scope.btn);
    }
    $scope.calc = function() {
    	var order = $scope.btn;
        for (var i = 0; i < order.length; i++) {
            console.log(order[i].x);
        }
    }
});
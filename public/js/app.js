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
        /*for (var i = 0; i < $scope.btn.length; i++) {
            $scope.newBtn.x = $("#c" + i).css("left");
            $scope.newBtn.y = $("#c" + i).css("top");
            $scope.newBtn.id = i;
            $scope.btn[i] = $scope.newBtn;
            $scope.newBtn = {};
        }*/
        console.log($scope.btn);
    }
    $scope.calc = function() {
        for (var i = 0; i < $scope.btn.length; i++) {
            $scope.newBtn.x = $("#c" + i).css("left");
            $scope.newBtn.y = $("#c" + i).css("top");
            $scope.newBtn.id = i;
            $scope.btn[i] = $scope.newBtn;
            $scope.newBtn = {};
        }
        var order = $scope.btn;
        var aux;
        for (var i = 0; i < order.length; i++) {
            for (var j = 0; j < order.length - 1; j++) {
                if (order[j].x > order[j + 1].x) {
                    aux = order[j];
                    order[j] = order[j + 1];
                    order[j + 1] = aux;

                }
            }
        }
        console.log(order);
    }
});
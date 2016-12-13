app = angular.module("app", ["app.directives", "app.services"]);
app.controller("mainCtrl", function($scope, Capacitor) {
    $scope.btn = Capacitor.getAll();
    $scope.newBtn = {};
    $scope.add = function() {
        Capacitor.add($scope.newBtn);
        $scope.newBtn = {}
    }
    $scope.calc = function() {
        for (var i = 0; i < $scope.btn.length; i++) {
            $scope.newBtn.x = $("#c" + i).css("left");
            $scope.newBtn.y = $("#c" + i).css("top");
            $scope.newBtn.id = i;
            $scope.newBtn.val = $("#c" + i).children('input').val();
            $scope.btn[i] = $scope.newBtn;
            $scope.newBtn = {};
        }
        var order = $scope.btn;
        order = Capacitor.sort(order);
        console.log(order);
    }
});
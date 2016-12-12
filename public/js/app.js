app = angular.module("myApp", []);
app.controller("mainCtrl", function($scope) {
	$scope.btn = [];
	$scope.newBtn = {};
	var id = 1;
	$scope.add = function() {
		$scope.newBtn.id = id;
		$scope.btn.push($scope.newBtn);
		$scope.newBtn = {}
		id++;
	}
});
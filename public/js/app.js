app = angular.module("app", ["app.directives", "app.capacitorService", "app.lineService"]);
app.controller("mainCtrl", function($scope, Capacitor, Line) {
    var capacitor = Capacitor;
    var line = Line;
    $scope.resultado = 0;
    $scope.lines = line.getAllLine();
    $scope.newLine = {};
    $scope.btn = capacitor.getAllCapacitor();
    $scope.newBtn = {};
    $scope.add = function() {
        capacitor.addCapacitor($scope.newBtn);
        $scope.newBtn = {}
    }
    $scope.addLine = function() {
        line.addLine($scope.newLine);
        $scope.newLine = {};
    }
    $scope.deleteInput = function(id) {
    	$scope.btn = capacitor.delete(id);
    }
    $scope.deleteLn = function(id) {
    	$scope.lines = line.delete(id);
    }
    $scope.calc = function() {
        var resultado = 0;
        for (var i = 0; i < $scope.lines.length; i++) {
            $scope.newLine.x = $("#line" + i).css("left");
            $scope.newLine.y = $("#line" + i).css("top");
            $scope.newLine.id = i;
            $scope.lines[i] = $scope.newLine;
            $scope.newLine = {};
        }
        for (var i = 0; i < $scope.btn.length; i++) {
            $scope.newBtn.x = $("#c" + i).css("left");
            $scope.newBtn.y = $("#c" + i).css("top");
            $scope.newBtn.paralelo = $("#c" + i).hasClass("c-paralelo");
            $scope.newBtn.id = i;
            $scope.newBtn.val = parseFloat($("#c" + i).children('input').val());
            $scope.btn[i] = $scope.newBtn;
            $scope.newBtn = {};
            resultado += $scope.btn[i].val;
        }
        var r = 0;
        var serie = [];
        var s = 0;
        var p = 0;
        var c = 0;
        var paralelo = [];
        var order = $scope.btn;
        var lineSort = $scope.lines;
        order = capacitor.sort(order);
        lineSort = line.sort(lineSort);
        for (var j = 0; j < lineSort.length; j++) {
            console.log(":v " + j);
            for (var i = c; i < order.length; i++) {
            	console.log("i : " + c);
                console.log(order[i].val);
                if (!order[i].paralelo) {
                    serie.push(order[i].val);
                } else {
                    paralelo.push(order[i].val);
                    try {
                        if (!order[i + 1].paralelo) {
                            c = i + 1;
                            console.log("break :v");
                            break;
                        }
                    } catch (err) {
                        break;
                    }
                }
                c = i + 1;
            }
            if (paralelo.length > 1) {
                p = capacitor.serie(paralelo);
            } else {
                p = capacitor.paralelo(paralelo);
            }
            console.log("Serie: " + capacitor.serie(serie));
            console.log("Paralelo: " + capacitor.paralelo(paralelo));
            s = capacitor.serie(serie);
            console.log("Serie: " + s);
            console.log("Paralelo: " + p);
            serie = [];
            paralelo = [];
            r = s + p;
            console.log("R: " + r);
            serie.push(r);
            console.log(":3 " + i);
        }
        r = $scope.capacitor.v *  r;
        $scope.resultado = r;
        console.log(r);
    }
});
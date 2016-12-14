app = angular.module("app", ["app.directives", "app.capacitorService", "app.lineService"]);
app.controller("mainCtrl", function($scope, Capacitor, Line) {
    var capacitor = Capacitor;
    var line = Line;
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
            $scope.newBtn.id = i;
            $scope.newBtn.val = parseFloat($("#c" + i).children('input').val());
            $(".paralelo").droppable({
                drop: function( event, ui ) {
                    var id = "#" +ui.draggable[0].id;
                    if(id.substring(1, 2) == "c") {
                        $(id).addClass("c-paralelo");
                        $scope.newBtn.paralelo = true;
                    }
                },
                out: function(event, ui){
                    var id = "#" +ui.draggable[0].id;
                    if(id.substring(1, 2) == "c") {
                        $(id).removeClass("c-paralelo");
                        $scope.newBtn.paralelo = false;
                    }
                }
            });
            $scope.btn[i] = $scope.newBtn;
            $scope.newBtn = {};
            resultado += $scope.btn[i].val;
        }
        var r = 0;
        var t = [];
        var order = $scope.btn;
        var lineSort = $scope.lines;
        order = capacitor.sort(order);
        lineSort = line.sort(lineSort);
        for (var i = 0; i < order.length; i++) {
            console.log(order[i].val);
            if(!order[i].paralelo) {
                t.push(order[i].val);
            } else{
                break;
            }
        }
        r = capacitor.serie(t);
        console.log(r);
    }
});
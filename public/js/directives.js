angular.module("app.directives", [])
.directive("drag", function () {
	function btn (scope, element, attrs) {
		$(element).draggable();
	}
	return {
		restrict: 'A',
		link: btn
	};
})
.directive("dragInput", function () {
	function btn (scope, element, attrs) {
		$(element).draggable();
	}
	return {
		restrict: 'E',
		templateUrl: "components/input.html"
	};
})
.directive("dropLine", function () {
	function btn (scope, element, attrs) {
		$(element).droppable({
			drop: function( event, ui ) {
				var id = "#" +ui.draggable[0].id;
				if(id.substring(1, 2) == "c") {
					$(id).addClass("c-paralelo");
				}
				alert(":v");
			},
			out: function(event, ui){
				var id = "#" +ui.draggable[0].id;
				if(id.substring(1, 2) == "c") {
					$(id).removeClass("c-paralelo");
				}
			}
		});
	}
	return {
		restrict: 'E',
		templateUrl: "components/linea.html"
	};
});
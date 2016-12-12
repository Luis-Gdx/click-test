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
});
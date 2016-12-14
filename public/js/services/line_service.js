angular.module("app.lineService", [])
.service("Line", function(){
	this.line = [];
	this.addLine = function(line) {
		this.line.push(line);
	}
	this.getAllLine = function() {
		return this.line;
	}
	this.delete = function(id) {
		this.line = this.line.filter(function(ln) {
			return ln !== id;
		});
		return this.getAllLine();
	}
	this.sort = function(array) {
		var aux;
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array.length - 1; j++) {
				if (array[j].x > array[j + 1].x) {
					aux = array[j];
					array[j] = array[j + 1];
					array[j + 1] = aux;
				}
			}
		}
		return array;
	}
});
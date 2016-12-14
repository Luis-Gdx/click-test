angular.module("app.capacitorService", [])
.service("Capacitor", function () {
	this.capacitor = [];
	this.addCapacitor = function(capacitor) {
		this.capacitor.unshift(capacitor);
	}
	this.getAllCapacitor = function() {
		return this.capacitor;
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
	this.serie = function(array) {
		var s = 0;
		for (var i = 0; i < array.length; i++) {
			s += 1 / array[i];
		}
		return 1 / s;
	}
});
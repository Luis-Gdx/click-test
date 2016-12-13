angular.module("app.services", [])
.factory("Capacitor", function () {
	var capacitor = {};
	capacitor.input = [];
	capacitor.add = function(input) {
		capacitor.input.push(input);
	}
	capacitor.getAll = function() {
		return capacitor.input;
	}
	capacitor.sort = function(array) {
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
		for (var i = 0; i < array.length; i++) {
			try{
				console.log(":vvv " + i);
				console.log(array[i + 1].y);
				console.log(array[i].y);
				console.log(array[i - 1].y);
			}catch(err){}
			if(array[i].y < array[i + 1] && array[i].y > array[i - 1]) {
				array[i].parallel = false;
			} else {
				array[i].parallel = true;
			}
		}
		return array;
	}
	return capacitor;
})
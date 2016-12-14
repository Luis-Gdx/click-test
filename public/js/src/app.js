$(function() {
	$("#cuadro").resizable();
	$("#cuadro").draggable();
	/*$("#arriba").droppable({
		drop: function( event, ui ) {
			var id = "#" +ui.draggable[0].id;
			if(id.substring(1, 2) == "c") {
				$(id).addClass("c-top");
			}
		},
		out: function(event, ui){
			var id = "#" +ui.draggable[0].id;
			if(id.substring(1, 2) == "c") {
				$(id).removeClass("c-top");
			}
		}
	});
	$("#abajo").droppable({
		drop: function( event, ui ) {
			var id = "#" +ui.draggable[0].id;
			if(id.substring(1, 2) == "c") {
				$(id).addClass("c-bot");
			}
		},
		out: function(event, ui){
			var id = "#" +ui.draggable[0].id;
			if(id.substring(1, 2) == "c") {
				$(id).removeClass("c-bot");
			}
		}
	});*/
	/*setInterval(function(){
		$(".paralelo").droppable({
			drop: function( event, ui ) {
				var id = "#" +ui.draggable[0].id;
				if(id.substring(1, 2) == "c") {
					$(id).addClass("c-paralelo");
				}
			},
			out: function(event, ui){
				var id = "#" +ui.draggable[0].id;
				if(id.substring(1, 2) == "c") {
					$(id).removeClass("c-paralelo");
				}
			}
		});
	}, 5000);*/
	$(".paralelo").droppable({
		drop: function( event, ui ) {
			var id = "#" +ui.draggable[0].id;
			if(id.substring(1, 2) == "c") {
				$(id).addClass("c-paralelo");
			}
		},
		out: function(event, ui){
			var id = "#" +ui.draggable[0].id;
			if(id.substring(1, 2) == "c") {
				$(id).removeClass("c-paralelo");
			}
			alert();
		}
	});
});
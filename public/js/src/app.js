$(function() {
	$("#cuadro").resizable();
	$("#cuadro").draggable();
	setInterval(function(){
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
	}, 3000);
});


$(document).ready(function() {
	for (var i=0;i<32;i++) {
		$("#container").append("<div class='row'></div>")
		for (var j=0; j<32; j++) {
			$("#container").last(".row").append("<div class='gridblock'></div>");
		}
	}

	

	$("#container").on("mouseenter",".gridblock",function() {
		$(this).addClass("highlight");

	});

	$("#reset").on("mouseenter",function() {
		$(this).addClass("highlightButton");

	});

	$("#reset").on("mouseleave",function() {
		$(this).removeClass("highlightButton");

	});

	$("#reset").on("click",function() {
		$('.gridblock').removeClass("highlight");
	});

	$('#top').on('click','#changeGridSize',function() {
		$("#container").empty();
		var size = prompt("Enter a grid size (ie: 16 => 16x16 grid");
		for (var i=0;i<size;i++) {
			$("#container").append("<div class='row'></div>")
			for (var j=0; j<size; j++) {
				$("#container").last(".row").append("<div class='gridblock'></div>");
			}
		}
	});
	
});


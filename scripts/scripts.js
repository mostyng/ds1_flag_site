function pageReload() {
	location.reload();
}

$(document).ready(function(){

	$(".landing").click(function(){
		$(this).toggleClass("push");
		$(".location").toggleClass("appear");
	});


	// $(".uberButton").click(function(){
	// $(this).hide();
	// $(".wavetext").addClass("disappear");
	// $(".close").addClass("appear");
	// $(".summary").addClass("appear");
	// $(".shoo").show();

	// });

	$(".close").click(function(){
		$(this).hide();
		$("#map").toggleClass("appear");
		$("#pano").toggleClass("appear");
		$(".summary").hide();
	});


	$(".shoo").click(function(){
		$(this).slideToggle("mobile");
		$(".wrapper").slideToggle("goUp");
		$(".wrapBack").slideToggle("goUp");
		$(".flagSmall").slideToggle("goUp");
		$(".summary").hide();

	});

	//all the discs go in this array 
	var flagDiscs = [
	"this is a discription",
	"this is also discription"
	]

	$('flag_group').click(function(){
		console.log("this has been clicked")
		$('.modal').empty();

		var id = $(this).attr("arrayIndex");

		$('.modal').append('<div class="modal-content"><p>' + flagDiscs[id] + '</p></div>')


	});



});
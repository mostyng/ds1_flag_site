function pageReload() {
    location.reload();
}

$(document).ready(function(){

	$(".landing").click(function(){
	$(this).toggleClass("push");
	$(".location").toggleClass("appear");
	});

	$(".flagSmall").click(function(){
	$(".wavetext").addClass("disappear");
	$(".close").addClass("appear");
	$(".summary").addClass("appear");
	$(".shoo").show();

	});

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

	// $(".home").click(function(){
	// $(this).slideToggle("mobile");
	// $(".flagSmall").slideToggle("goUp");
	// $(".wrapper").slideToggle("goUp");
	// $(".wrapBack").slideToggle("goUp");
	// $(".wavetext").removeClass("disappear");
	// $(".close").removeClass("appear");
	// $("#map").removeClass("appear");
	// $("#pano").removeClass("appear");
	// });


});
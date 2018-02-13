$(document).ready(function(){

	$(".landing").click(function(){
	$(this).toggleClass("push");
	$(".location").toggleClass("appear");
	});

	$(".uberButton").click(function(){
	$(this).hide();
	$(".wavetext").toggleClass("disappear");
	$(".close").toggleClass("appear");
	$(".summary").toggleClass("appear");
	});

	$(".close").click(function(){
	$(this).hide();
	$("#map").toggleClass("appear");
	$("#pano").toggleClass("appear");
	$(".summary").toggleClass("appear");

	});
});
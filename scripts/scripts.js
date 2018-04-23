function pageReload() {
	location.reload();
}

$(document).ready(function(){

	$(".landing").click(function(){
		$(this).toggleClass("push");
		$(".location").toggleClass("appear");
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

});
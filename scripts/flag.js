$(document).ready(function(){

	var toggle = true;
	var isOnDiv = false;
	var firstClick = false;



	$(".bottom").mouseenter(function(){isOnDiv=true;});
	$(".bottom").mouseleave(function(){isOnDiv=false;});



	$(".flag_group").click(function(){

		$(".flag_group.active").removeClass('active');
		$(this).addClass("active");

		var newFlags = $(this).attr("id");
		var name = $(this).attr("name");

		console.log(newFlags);
		console.log(name);

		$(".name_span").html(name);

		$(".flag-one > .flagContain").css("background", "url('flags/" + newFlags +  "/01.jpg')");
		$(".flag-two > .flagContain").css("background", "url('flags/" + newFlags + "/02.jpg')");
		$(".flag-three > .flagContain").css("background", "url('flags/" + newFlags + "/03.jpg')");
		$(".flag-four > .flagContain").css("background", "url('flags/" + newFlags + "/04.jpg')");

		$(".flag-one > .flagContain").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});
		$(".flag-two > .flagContain").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});
		$(".flag-three > .flagContain").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});
		$(".flag-four > .flagContain").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});

		$(".flag-one > .flagContain").addClass("flagRaiseAnim");
		$(".flag-two > .flagContain").addClass("flagRaiseAnim");
		$(".flag-three > .flagContain").addClass("flagRaiseAnim");
		$(".flag-four > .flagContain").addClass("flagRaiseAnim");


	});

	$(".name").click(function(){
		$("#myModal").show();
	});

	$(".close").click(function(){
		$("#myModal").hide();
	});

	window.onclick = function(event) {
		if (event.target == document.getElementById('myModal')) {
			$("#myModal").hide();
		}
	}

	var flagDiscs = [
	"DONT PUT ANYTHING HERE IT IS NOT IN USE YOU MUST LEAVE THE FIRST INDEX IN THE ARRAY BLANK",
	"this is a discription",
	"this is also discription",
	"this is also discription",
	"this is also discription"
	]

	$(".flag_group").click(function(){
		$(".flag_pole").addClass("whiten");
		$(".flag_pole_top").addClass("whiten");
		$(".upperRight").addClass("flushRight");
		
		$('.modal').empty();

		var id = $(this).attr("arrayIndex");
		console.log(id);

		if(id <= flagDiscs.length){
			$('.modal').append('<div class="modal-content"><p>' + flagDiscs[id] + '</p></div>');
		}else{
			$('.modal').append('<div class="modal-content"><p>This proposal has no discription</p></div>');
		}

	});


});
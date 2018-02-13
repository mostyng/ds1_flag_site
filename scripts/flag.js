$(document).ready(function(){

	var toggle = true;
	var isOnDiv = false;

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

		// $(".flag-one").css("background", "url('flags/" + newFlags +  "/01.png')");
		// $(".flag-two").css("background", "url('flags/" + newFlags + "/02.png')");
		// $(".flag-three").css("background", "url('flags/" + newFlags + "/03.png')");
		// $(".flag-four").css("background", "url('flags/" + newFlags + "/04.png')");

		$(".flag-one").css("background", "url('flags/" + newFlags +  "/01.jpg')");
		$(".flag-two").css("background", "url('flags/" + newFlags + "/02.jpg')");
		$(".flag-three").css("background", "url('flags/" + newFlags + "/03.jpg')");
		$(".flag-four").css("background", "url('flags/" + newFlags + "/04.jpg')");

		// $(".flag-one").css("background-size", "cover");
		// $(".flag-two").css("background-size", "cover");
		// $(".flag-three").css("background-size", "cover");
		// $(".flag-four").css("background-size", "cover");

		$(".flag-one").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});
		$(".flag-two").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});
		$(".flag-three").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});
		$(".flag-four").css({"background-size": "cover", "background-position": "center center", "background-repeat": "no-repeat"});

	});
});
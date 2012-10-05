
$(document).ready(function(){
	$("#fixit").fadeOut(0);
	
	$(".top p").click(function(){
		$(this).hide(500);
		$("#fixit").fadeIn(1500);
	});
	
	$("a").click(function(){
		return false;
	});
	
	$("#fixit").click(function(){
			$(".top p").toggle(500);
			return false;
	});
	
	$("h2").click(function(){
		if($(this).hasClass("ugly"))
		{
			$(this).removeClass("ugly");
			$(this).animate({"font-size":"1.5em"});
		}
		else
		{
			$(this).addClass("ugly");
			$(this).animate({"font-size":"3.8em"});
		}
	});
});
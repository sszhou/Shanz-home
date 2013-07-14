var h =  768;
var w = 1024;
var land = true;
var squint = 200;

$(function(){
	vArrange();
});
$(window).resize(function(){
	vArrange();
});
function vArrange()
{
	h =  $(window).height()*0.95;
	w =  $(window).width();
	squint = Math.min(h*0.2,200);
	if( h > w*1.33 || w < 450)
	{
		land = false;
		portrait();
	}
	else
	{		
		land = true;
		landscape();
	}
}	
function portrait()
{
	$("header").css({"height":$("#fbody").height(),"max-height":450, "margin-top":0,"margin-bottom":0});			
	$("header #banner").css("top", h*0.1);	
	$("header #banner h1").css({"float":"left"});	
	$("header #banner div").css({"min-width":w*0.8});		
	$("footer").css({"margin-top":0.1*h});	
	$("#main div, footer div").css({"float":"none", "margin":"10px auto"});		
	$("#fox img").css("width",w);
	$("#fox").css({"margin-top":"0px","width":w});
}
function landscape()
{
	$("#fox").css({"margin-top":"-200px","width":600});
	$("#fox img").css("width",600);
	$("header").css({"height":squint,"margin-top":h*0.1,"margin-bottom":h*0.2});		
	$("header #banner").css("top",h*0.25);
	$("header #banner h1").css("float", "right");		
	
	$("#main").css({"margin-top":0,"min-height":h*0.1});	
	$("footer").css({"margin-top":h*0.05});	
	$("#main div").css({"float":"left", "margin":"auto"});	
	$("footer div").css({"float":"left", "margin":"auto 15% 0 0"});	
}
$("#fbody").mouseover(function(){	
	if(!land || $("header").is(':animated'))
		return;
		$("header").stop().animate({
			height:h*0.4,
			marginBottom: h*0.2 - (h*0.4-squint)
			});
		$("header #fox").stop().animate({
			marginTop:-200-h*0.05
			});
});
$("#fbody").mouseout(function(){
		if(!land || $("header").is(':animated'))
			return;
	  	$("header").delay(10000).animate({
			height:squint,			
			marginBottom:h*0.2
			});
		$("header #fox").animate({
			marginTop:-200
			});
});

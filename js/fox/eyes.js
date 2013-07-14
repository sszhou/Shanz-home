

$("#main").hover(function(){	
	if(land)
		eyeTease();
	},
	  function(){
	  	$("#eyeO").stop().delay(2000).animate({
			opacity:'0'
			});		
	  	$("header").stop();
	});

function eyeTease()
{
	$("#eyeO").css({
			opacity:'0.8'
			});
		
	$("#work").hover(function(){
			$("#eyeO").stop().animate({
				left:'-1.5em'
				});
		  },
		  function(){
		  	$("#eyeO").animate({
				left:'0em'
				});
		});
		
	$("#play").hover(function(){
			$("#eyeC").stop().animate({
				top:'220px'
			});
			$("#eyeO").stop().animate({
				top:'240px'
				});
		  },
		  function(){
		  	$("#eyeC").stop().animate({
				top:'230px'
			});
		  	$("#eyeO").animate({
				top:'250px'
				});
		});
		
	$("#doc").hover(function(){
			$("#eyeO").stop().animate({
				left:'1.5em'
				});
		  },
		  function(){
		  	$("#eyeO").animate({
				left:'0em'
				});
		});
		
	}



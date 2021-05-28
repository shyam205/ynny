$(document).ready(function() { 
	
    if(window.innerWidth > 768){
	$('.container').ripples({
			resolution: 512,
			dropRadius: 20, 
			perturbance: 0.04,
		});              
     }
	 if(window.innerWidth < 769){
		$('.container').ripples({
				resolution: 256,
				dropRadius: 10, 
				perturbance: 0.01,
			}); 
		}
		if(window.innerWidth > 768){
			$('.second-banner').ripples({
					resolution: 512,
					dropRadius: 20, 
					perturbance: 0.04,
				});              
			 }
			 if(window.innerWidth < 769){
				$('.second-banner').ripples({
						resolution: 256,
						dropRadius: 10, 
						perturbance: 0.01,
					}); 
				}

  $("#lable").click(function(){
	  $(".second-banner").toggleClass('banner-second');
  })

  $(document).mousemove(function(e){
	 $(".cursorfirst").css({"left" : e.pageX + "px", "top": e.pageY + "px"});
	 $(".cursorsec").css({"left" : e.pageX + "px", "top": e.pageY + "px"});
   });
  
});


	
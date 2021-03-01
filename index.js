$(document).ready(function() { 
    if(window.innerWidth > 768){
	$('.container').ripples({
			resolution: 512,
			dropRadius: 20, 
			perturbance: 0.04,
		});              
     }
  $("#lable").click(function(){
	  $(".second-banner").toggleClass('banner-second');
  })
});
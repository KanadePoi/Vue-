
// banner

	$(function(){
		var initX;
		$("#carousel-example-generic").on("touchstart",function(event){
			initX = event.originalEvent.targetTouches[0].pageX;
		});
		$("#carousel-example-generic").on("touchmove",function(event){
			var moveX = event.originalEvent.targetTouches[0].pageX;
			if(initX < moveX){
				$('.carousel').carousel('prev');
			}else{
				$('.carousel').carousel('next');
			}
		});

	});


	
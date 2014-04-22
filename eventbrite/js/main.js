function fade(){ 
	//Gracefully degrade IE6 for transparent png problem.	
	if ($.browser.msie && $.browser.version=="6.0") {
		$('.earl').css('display', 'none');

		setTimeout(function(){
			$('.earl').css('display', 'block');
		}, 200);
	}
	else {
		$('.earl').fadeOut(400);
		setTimeout(function(){
			$('.earl').fadeIn();
		}, 200);
	}   	      
};

function jump(){ 	
	$('.earl').css('top','150px');

	setTimeout(function(){
		$('.earl').css('top','250px');
	}, 200);

};


$( document ).ready(function() {

	$('#fade').click(fade);
	$('#jump').click(jump);

});
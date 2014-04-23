function fade(){ 
	//Gracefully degrade IE6 for transparent png problem.	
	if ($.browser.msie && $.browser.version=="6.0") {
		$('button').prop('disabled', true);
		$('.earl').css('display', 'none');
		
		setTimeout(function(){
			$('.earl').css('display', 'block');
			$('button').prop('disabled', false);
		}, 200);
	}
	else {
		$('button').prop('disabled', true);
		$('.earl').fadeOut(400);
		setTimeout(function(){
			$('button').prop('disabled', false);
			$('.earl').fadeIn();
		}, 200);
	}   	      
};


function jump(){ 	
	$('button').prop('disabled', true);
	$('.earl').css('top','150px');
	$('button').prop('disabled', true);

	setTimeout(function(){
		$('.earl').css('top','250px');
		$('button').prop('disabled', false);
	}, 200);

};

function hat() {

	if ($.browser.msie && $.browser.version=="6.0") {
		$('button').prop('disabled', true);
		$('.hat').css('display', 'block');
		
		setTimeout(function(){
			$('.hat').css('display', 'none');
			$('button').prop('disabled', false);
		}, 600);
	}

	$('.hat').toggle();
};
function expand() {
	$('button').prop('disabled', true);
	$('.earl, .hat').hide({ effect: "scale", direction: "horizontal" });
	
	setTimeout(function(){
		$('.earl').fadeIn();		
		$('button').prop('disabled', false);
	}, 600);
	
};


$( document ).ready(function() {

	$('#fade').click(fade);
	$('#jump').click(jump);
	$('#hat').click(hat);
	$('#expand').click(expand);


});